const express = require('express');
const { Cart, CartProduct, Product } = require('../db');
const router = express.Router();

//Get all carts
// Get localhost:3000/api/carts
router.get('/', async (req, res, next) => {
  const carts = await Cart.findAll({ include: [Product] });
  res.send(carts);
});

//Get a cart
//Get localhost:3000/api/carts/:id
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id) {
      const cart = await Cart.findByPk(id, {
        include: [Product],
      });
      res.send(cart);
    }
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//To create a new cart
//Post localhost:3000/api/carts
router.post('/', async (req, res, next) => {
  try {
    const { totalPrice, quantity } = req.body;
    const newCart = await Cart.create({ totalPrice, quantity });

    res.sendStatus(204);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//delete a cart
// Delete localhost:3000/carts/:id
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  const NOTFOUNDMESSAGE = `The cart you are trying to delete does not exists!!`;
  try {
    const cartToDelete = await Cart.findByPk(id);
    if (!cartToDelete) {
      throw new Error(NOTFOUNDMESSAGE);
    }
    await cartToDelete.destroy();
    res.sendStatus(202);
  } catch (err) {
    if (err.message === NOTFOUNDMESSAGE)
      return res.status(404).send({ message: NOTFOUNDMESSAGE });
  }
});
module.exports = router;
