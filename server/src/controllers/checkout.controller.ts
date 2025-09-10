import Stripe from 'stripe';
import { Request, Response } from 'express';
import Order from '../models/Order';
import Book from '../models/Book';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createPaymentIntent = async (req: Request, res: Response) => {
  const { items } = req.body as { items: { bookId: string; quantity: number }[] };
  const userId = (req as any).user?.id; // optional

  // Compute order total from DB to prevent tampering
  const books = await Book.find({ _id: { $in: items.map(i => i.bookId) } });
  const map = new Map(books.map(b => [String(b._id), b]));
  let amount = 0;
  const orderItems = items.map(i => {
    const b = map.get(i.bookId)!;
    amount += b.price * i.quantity;
    return { book: b._id, title: b.title, price: b.price, quantity: i.quantity };
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'usd',
    automatic_payment_methods: { enabled: true }
  });

  const order = await Order.create({
    user: userId,
    items: orderItems,
    amount,
    currency: 'usd',
    paymentIntentId: paymentIntent.id,
    status: 'pending'
  });

  res.json({ clientSecret: paymentIntent.client_secret, orderId: order._id });
};