const express = require("express");
const { User } = require("../db");
const router = express.Router();


//get all users
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.send(users);
  });


//get single user by user id
  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      // include: ShoppingCart
    });
    res.send(user);
  });


//delete user by user id
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