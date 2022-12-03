const express = require("express");
const { Product } = require("../db");
const router = express.Router();

//get all products
router.get("/", async (req, res, next) => {
    const products = await Product.findAll();
    res.send(products);
  });


//get single product by product id
  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.send(product);
  });


//delete product by product id
  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const toDelete = await Product.findByPk(id);
      if (!toDelete) {
        throw new Error("Product does not exist");
      }

      await toDelete.destroy();

      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      next(err);
    }
  });



module.exports = router;