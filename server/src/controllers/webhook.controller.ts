import Stripe from 'stripe';
import { Request, Response } from 'express';
import Order from '../models/Order';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent((req as any).rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    if (event.type === 'payment_intent.succeeded') {
      const pi = event.data.object as Stripe.PaymentIntent;
      await Order.findOneAndUpdate({ paymentIntentId: pi.id }, { status: 'paid' });
    } else if (event.type === 'payment_intent.payment_failed') {
      const pi = event.data.object as Stripe.PaymentIntent;
      await Order.findOneAndUpdate({ paymentIntentId: pi.id }, { status: 'failed' });
    }
    res.json({ received: true });
  } catch (e) {
    res.status(500).json({ message: 'Webhook handler error' });
  }
};