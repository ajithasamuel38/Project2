const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controller/products');


router.get('/', productController.shopproducts);

module.exports = router;