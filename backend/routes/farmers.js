const express = require('express');
const router = express.Router();
const { getAllFarmers } = require('../controllers/farmerController');
const auth = require('../middlewares/auth');

router.get('/', getAllFarmers);

module.exports = router;