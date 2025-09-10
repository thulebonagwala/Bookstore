import { Schema, model, Types } from 'mongoose';

const OrderSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  items: [{
    book: { type: Types.ObjectId, ref: 'Book', required: true },
    title: String,
    price: Number,
    quantity: Number
  }],
  amount: { type: Number, required: true },
  currency: { type: String, default: 'usd' },
  paymentIntentId: { type: String, index: true },
  status: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
  address: { type: Object }
}, { timestamps: true });

export default model('Order', OrderSchema);