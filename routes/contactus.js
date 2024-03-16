const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controller/products');

router.get('/contactus', productController.contactus);

router.post('/success', productController.success);

module.exports = router;