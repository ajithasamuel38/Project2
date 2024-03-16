const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controller/products');

router.get('/add-product', productController.getproduct);

router.post('/add-product', productController.addproduct)

module.exports = router;