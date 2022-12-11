const express = require('express');
const { Product, Review } = require('../db');
const router = express.Router();

//get all products
router.get('/', async (req, res, next) => {
  const products = await Product.findAll({
    include: [Review],
  });
  console.log(Product);
  res.send(products);
});

// get a single product by product id
//Get localhost:3000/api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id) {
      const product = await Product.findByPk(id);
      res.send(product);
    }
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//create a new product
// Post localhost:3000/api/products
router.post('/', async (req, res, next) => {
  try {
    const {
      name,
      type,
      price,
      origin,
      description,
      roastLevel,
      brewMethod,
      treatmentProcess,
      img,
    } = req.body;
    console.log('req.body', req.body);
    const newProduct = await Product.create({
      name,
      type,
      price,
      origin,
      description,
      roastLevel,
      brewMethod,
      treatmentProcess,
      img,
    });
    console.log('newProduct', newProduct);
    res.sendStatus(204);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//to update a product
// Put localhost:3000/api/product/:id
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      name,
      type,
      price,
      origin,
      description,
      roastLevel,
      brewMethod,
      treatmentProcess,
      img,
    } = req.body;
    const product = await Product.findByPk(id);
    product.update({
      name,
      type,
      price,
      origin,
      description,
      roastLevel,
      brewMethod,
      treatmentProcess,
      img,
    });
    res.send(200);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});
// delete a product
// Delete localhost:3000/products/:id
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  const NOTFOUNDMESSAGE = `The product you are trying to delete does not exists!!`;
  try {
    const productToDelete = await Product.findByPk(id);
    if (!productToDelete) {
      throw new Error(NOTFOUNDMESSAGE);
    }
    await productToDelete.destroy();
    res.sendStatus(202);
  } catch (err) {
    if (err.message === NOTFOUNDMESSAGE)
      return res.status(404).send({ message: NOTFOUNDMESSAGE });
  }
});
module.exports = router;
