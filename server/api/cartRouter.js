const express = require("express");
const { Cart, CartProduct, Product } = require("../db");
const router = express.Router();

//Get all carts
// Get localhost:3000/api/carts
router.get("/", async (req, res, next) => {
  const carts = await Cart.findAll({ include: [Product] });
  res.send(carts);
});

//Get a cart
//Get localhost:3000/api/carts/:id
router.get("/:id", async (req, res, next) => {
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
//!Might need to change this completely
//Post localhost:3000/api/carts
router.post("/", async (req, res, next) => {
  try {
    const { totalPrice, quantity } = req.body;
    const newCart = await Cart.create({ totalPrice, quantity });

    res.sendStatus(204);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//update cart info
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { productId } = req.body; //!add quantity later in here too
  console.log(productId);
  const cart = await Cart.findByPk(id, { include: [Product] });
  const productsList = cart.products;
  const productIds = productsList.map((product) => product.id);
  if (productIds.includes(productId)) {
    const cartProdcut = await CartProduct.findAll({
      where: { cartId: id, productId: productId },
    });
    let quantity = cartProdcut[0].dataValues.productQuantity + 1;

    await cartProdcut[0].update({
      productQuantity: quantity,
    });

    console.log(quantity);
    return res.sendStatus(200);
  } else {
    const product = await Product.findByPk(productId);
    cart.addProducts(product);
  }
});

//delete a cart
// Delete localhost:3000/carts/:id
router.delete("/:id", async (req, res, next) => {
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
