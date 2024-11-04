import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  totalAmount: { type: Number, required: true },
});

export default mongoose.model('Order', orderSchema);