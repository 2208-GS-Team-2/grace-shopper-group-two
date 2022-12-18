const express = require("express");
const { CartProduct } = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cartProduct = await CartProduct.findAll();

    res.send(cartProduct);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const cartId = req.body.cartId;

    const deleteProductFromCart = await CartProduct.findOne({
      where: { productId: productId, cartId: cartId },
    });

    await deleteProductFromCart.destroy();
    res.send(202);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

router.put("/update", async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const cartId = req.body.cartId;
    const productQuantity = req.body.productQuantity;

    const cartProduct = await CartProduct.findOne({
      where: { productId: productId, cartId: cartId },
    });

    if (productQuantity === "0") {
      await cartProduct.destroy();
      return res.send("product removed from cart");
    }

    await cartProduct.update({
      productQuantity: productQuantity,
    });
    res.send("product quantity updated");
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params;
    const cartProduct = await CartProduct.findByPk(id);

    res.send(cartProduct);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

module.exports = router;
