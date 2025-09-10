import { Router } from 'express';
import { createPaymentIntent } from '../controllers/checkout.controller';
import { requireAuth } from '../middleware/auth';

const r = Router();

r.post('/create-payment-intent', requireAuth, createPaymentIntent);

export default r;