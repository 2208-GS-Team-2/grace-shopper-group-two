const express = require("express");
const { Cart, CartProduct, Product } = require("../db");
const router = express.Router();

router.delete("/", async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const cartId = req.body.cartId;
    const deleteProductFromCart = await CartProduct.findAll({
      where: { productId: productId, cartId: cartId },
    });
    await deleteProductFromCart.destoy();
    res.send(202);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
