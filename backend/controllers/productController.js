const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, quantity } = req.body;
    const product = new Product({ ...req.body, farmer: req.userId });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('farmer','name email');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};