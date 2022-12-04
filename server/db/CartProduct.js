const db = require('./db');
const Sequelize = require('sequelize');
const { INTEGER, UUID, UUIDV4 } = require('sequelize');

const CartProduct = db.define('CartProduct', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  quantity: {
    type: INTEGER,
  },
});

module.exports = CartProduct;
