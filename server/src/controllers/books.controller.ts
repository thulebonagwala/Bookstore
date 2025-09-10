import Book from '../models/Book';
import { Request, Response } from 'express';

export const listBooks = async (req: Request, res: Response) => {
  const page = Math.max(parseInt(String(req.query.page || '1')), 1);
  const limit = Math.min(Math.max(parseInt(String(req.query.limit || '12')), 1), 60);
  const q = String(req.query.q || '').trim();
  const filter: any = {};
  if (q) filter.$text = { $search: q };
  if (req.query.category) filter.categories = req.query.category;

  const [items, total] = await Promise.all([
    Book.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Book.countDocuments(filter)
  ]);

  res.json({ items, page, pages: Math.ceil(total / limit), total });
};

export const getBook = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  res.json(book);
};

export const upsertBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = id ? await Book.findByIdAndUpdate(id, req.body, { new: true }) : await Book.create(req.body);
  res.status(id ? 200 : 201).json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).send();
};