const express = require('express');
const { Product, CartProduct } = require('../db');
const router = express.Router();

//get all products
router.get('/', async (req, res, next) => {
  const products = await Product.findAll();
  console.log(Product);
  res.send(products);
});

//get single product by product id
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  res.send(product);
});

module.exports = router;
