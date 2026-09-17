import {Request, Response} from 'express';
import Stripe from 'stripe';
import { createBucketClient } from '@cosmicjs/sdk';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const cosmic = createBucketClient({
  bucketSlug: process.env.VITE_BUCKET_SLUG || '',
  readKey: process.env.VITE_BUCKET_READ_KEY || '',
});

export const createCheckoutSession = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;
    const itemIds = items.map((item: any) => item.id);

    const { objects: realArtworks } = await cosmic.objects
      .find({ 
        type: 'artworks',
        id: { $in: itemIds } 
      })
      .props('id,title,metadata');

    const lineItems = realArtworks.map((artwork: any) => ({
      price_data: {
        currency: 'sek',
        product_data: {
          name: artwork.title,
        },
        unit_amount: artwork.metadata.price * 100, 
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/cart',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
};  