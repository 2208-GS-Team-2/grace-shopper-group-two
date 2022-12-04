const express = require('express');
const { User } = require('../db');
const router = express.Router();

//get all users
router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
});

//get single user by user id
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByPk(id, {
    // include: ShoppingCart
  });
  res.send(user);
});

module.exports = router;
