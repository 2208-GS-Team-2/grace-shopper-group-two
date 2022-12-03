const express = require("express");
const { User } = require("../db");
const router = express.Router();


//get all products
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.send(users);
  });


//get single product by product id
  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.send(user);
  });


//delete product by product id
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