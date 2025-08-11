const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  price: Number,
  quantity: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);