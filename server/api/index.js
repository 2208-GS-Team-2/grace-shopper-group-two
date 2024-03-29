const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/products', require('./productsRouter'));
router.use('/users', require('./usersRouter'));
router.use('/carts', require('./cartRouter'));
router.use('/reviews', require('./reviewRouter'));
router.use("/cartproducts", require("./cartProducts"));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
module.exports = router;
