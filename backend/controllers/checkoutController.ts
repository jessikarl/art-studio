import {Request, Response} from 'express';
import Stripe from 'stripe';
import { createBucketClient } from '@cosmicjs/sdk';
import pool from '../models/Database';
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

    
    let totalAmount = 0;
    const lineItems = realArtworks.map((artwork: any) => {

      const priceInCents = Math.round(artwork.metadata.price * 100);
      totalAmount += priceInCents;

      return {
        price_data: {
          currency: 'sek',
          product_data: {
            name: artwork.title,
          },
          unit_amount: priceInCents,
        },
        quantity: 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/cart',
    });

    const userId = (req as any).user ? (req as any).user.id : 1;

    const [orderResult]: any = await pool.query(
      'INSERT INTO orders (user_id, stripe_session_id, total_amount, status) VALUES (?, ?, ?, ?)',
      [userId, session.id, totalAmount, 'pending']
    );

    const orderId = orderResult.insertId; 

    for (const art of realArtworks) {
      await pool.query (
        'INSERT INTO order_items (order_id, artwork_id, price_at_purchase) VALUES (?, ?, ?) ',
        [orderId, art.id, Math.round(art.metadata.price *100)]
      );
    }

    res.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
};

export const verifyAndSaveOrder = async (req: Request, res: Response) => {
  try {
    const {sessionId} = req.body;

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      await pool.query(
        'UPDATE orders SET status = ? WHERE stripe_session_id = ?',
        ['paid', sessionId]
      );

      res.json({success: true, message: 'Order paid successfully'});
    } else {
      res.status(400).json({error: 'Payment not completed'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Verification failed'});
  }

};