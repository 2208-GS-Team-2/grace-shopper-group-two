const express = require("express");
const { CartProduct } = require("../db");
const router = express.Router();

router.delete("/", async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const cartId = req.body.cartId;

    const deleteProductFromCart = await CartProduct.findOne({
      where: { productId: productId, cartId: cartId },
    });

    await deleteProductFromCart.destroy();
    res.send(202);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;