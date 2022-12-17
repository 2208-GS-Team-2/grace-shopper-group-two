const express = require("express");
const { CartProduct } = require("../db");
const router = express.Router();

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

module.exports = router;
