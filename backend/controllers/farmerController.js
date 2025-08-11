const User = require('../models/User');

exports.getAllFarmers = async (req, res) => {
  try {
    const farmers = await User.find({ role: 'farmer' }).select('-password');
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};