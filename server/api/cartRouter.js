const express = require("express");
const { Cart, CartProduct, Product } = require("../db");
const router = express.Router();

//Get all carts
// Get localhost:3000/api/carts
router.get("/", async (req, res, next) => {
  const carts = await Cart.findAll({ include: [Product] });
  res.send(carts);
});

//Get localhost:3000/api/cart/userCart

router.post("/usercart", async (req, res, next) => {
  try {
    const userCart = req.body.userCart;
    // 1.get req.body from the front end and pass it he } = req.body;
    // console.log(userId);
    // 2. find the cart where the userIds is equal to the userId.
    const findCartOfUserId = await Cart.findAll({
      where: { userId: userCart },
      include: [Product],
      order: [[Product, "name", "ASC"]],
    });
    res.send(findCartOfUserId);
    // 1.get req.body from the front end and pass it he } = req.body;
    // 2. find the cart where the userIds is equal to the userId
    // send the findCartOfUserId  to the front end for the user.
  } catch (err) {
    return res.status(501).send(err.message);
  }
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

  const cart = await Cart.findByPk(id, { include: [Product] });
  const productsList = cart.products;
  const productIds = productsList.map((product) => product.id);
  if (productIds.includes(productId)) {
    const cartProduct = await CartProduct.findAll({
      where: { cartId: id, productId: productId },
    });
    let quantity = cartProduct[0].dataValues.productQuantity + 1;

    await cartProduct[0].update({
      productQuantity: quantity,
    });

    console.log(quantity);
    // await new Promise(r => setTimeout(r, 20000));
    return res.sendStatus(200);
  } else {
    const product = await Product.findByPk(productId);
    await cart.addProducts(product);
    // await new Promise(r => setTimeout(r, 20000));
    return res.sendStatus(200);
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
