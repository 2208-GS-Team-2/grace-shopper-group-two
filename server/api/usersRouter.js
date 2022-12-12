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
  try {
    const id = req.params.id;
    if (id) {
      const user = await User.findByPk(id, { include: [Cart] });
      res.send(user);
    }
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//To update a user
//Put localhost:3000/api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { username, email, password, isAdmin } = req.body;
    const user = await User.findByPk(id);
    user.update({ username, email, password, isAdmin });
    res.send(200);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//To delete a user
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  const NOTFOUNDMESSAGE = `The user you are trying to delete does not exists!!`;
  try {
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      throw new Error(NOTFOUNDMESSAGE);
    }
    await userToDelete.destroy();
    res.sendStatus(202);
  } catch (err) {
    if (err.message === NOTFOUNDMESSAGE)
      return res.status(404).send({ message: NOTFOUNDMESSAGE });
  }
});

router.post("/", async (req, res, next) => {
  const { username, password, email } = req.body;

  const users = await User.findAll();
  const usersEmail = users.map((user) => user.email);

  if (usersEmail.includes(email)) {
    return res.sendStatus(403);
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
