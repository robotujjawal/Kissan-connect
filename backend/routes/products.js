const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const auth = require('../middlewares/auth');

router.get('/', getProducts);
router.post('/', auth, createProduct);

module.exports = router;