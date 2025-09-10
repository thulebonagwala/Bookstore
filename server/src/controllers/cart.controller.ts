import { Request, Response } from 'express';
import Book from '../models/Book';

export const priceCart = async (req: Request, res: Response) => {
  const { items } = req.body as { items: { bookId: string; quantity: number }[] };
  const ids = items.map(i => i.bookId);
  const books = await Book.find({ _id: { $in: ids } });
  const map = new Map(books.map(b => [String(b._id), b]));
  let amount = 0;
  const detailed = items.map(i => {
    const b = map.get(i.bookId)!;
    const line = { book: b._id, title: b.title, price: b.price, quantity: i.quantity };
    amount += b.price * i.quantity;
    return line;
  });
  res.json({ amount, currency: 'usd', items: detailed });
};