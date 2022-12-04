const express = require('express');
const { Cart, CartProduct, Product } = require('../db');
const router = express.Router();

//Get all carts
router.get('/', async (req, res, next) => {
  const carts = await Cart.findAll({ include: [Product] });
  res.send(carts);
});

module.exports = router;
