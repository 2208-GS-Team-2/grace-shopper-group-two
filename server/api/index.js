const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use("/products", require("./productsRouter"));

module.exports = router;