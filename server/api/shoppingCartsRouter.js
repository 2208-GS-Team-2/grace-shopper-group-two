const express = require("express");
const { ShoppingCart } = require("../db");
const router = express.Router();


//get all shoppingcarts
router.get("/", async (req, res, next) => {
    const shoppingCarts = await ShoppingCart.findAll();
    res.send(shoppingCarts);
  });


//get single shoppingcart by product id
  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const cart = await ShoppingCart.findByPk(id);
    res.send(cart);
  });


//delete cart by product id
  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const toDelete = await User.findByPk(id);
      if (!toDelete) {
        throw new Error("User does not exist");
      }

      await toDelete.destroy();

      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      next(err);
    }
  });



module.exports = router;