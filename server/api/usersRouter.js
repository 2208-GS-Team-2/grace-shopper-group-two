const express = require("express");
const { User, Cart, Review } = require("../db");
const router = express.Router();

//get all users
router.get("/", async (req, res, next) => {
  const users = await User.findAll({ include: [Review, Cart] });
  res.send(users);
});

//get single user by user id
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByPk(id, { include: [Cart] });
  res.send(user);
});

router.post("/", async (req, res, next) => {
  const { username, password, email } = req.body;

  const users = await User.findAll();
  const usersEmail = users.map((user) => user.email);

  if (usersEmail.includes(email)) {
    return res.sendStatus(403);
    // return res.status(403).send({ message: USE A DIFFERENT EMAIL })
  }

  const newUser = await User.create({
    username,
    password,
    email,
  });

  const newCart = await Cart.create();
  newCart.setUser(newUser);

  res.sendStatus(204);
});

module.exports = router;
