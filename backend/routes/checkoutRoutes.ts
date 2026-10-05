import { Router } from 'express';
import { createCheckoutSession, verifyAndSaveOrder } from '../controllers/checkoutController';

const router = Router();

router.post('/', createCheckoutSession);

router.post('/verify-order', verifyAndSaveOrder);

export default router;