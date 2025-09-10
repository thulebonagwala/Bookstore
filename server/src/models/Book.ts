import { Schema, model, Types } from 'mongoose';

const BookSchema = new Schema({
  title: { type: String, required: true, index: 'text' },
  author: { type: String, required: true, index: true },
  description: { type: String },
  price: { type: Number, required: true, min: 0 },
  currency: { type: String, default: 'usd' },
  isbn: { type: String, unique: true, sparse: true },
  categories: [{ type: String, index: true }],
  stock: { type: Number, default: 0 },
  coverUrl: { type: String },
  ratingAvg: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 }
}, { timestamps: true });

BookSchema.index({ title: 'text', description: 'text' });

export default model('Book', BookSchema);