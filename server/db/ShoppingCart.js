const db = require("./db");
const Sequelize = require("sequelize");
const { INTEGER, UUID, UUIDV4 } = require("sequelize");

const ShoppingCart = db.define('shoppingCart', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  quantity: {
    type: INTEGER
  },
  // productId: {
  //   type: UUID,
  //   allowNull: true,
  // }
  //! this is attached to productId currentpriceperitem: {},
  //! maybe do this on front-end or a function within here
  // totalPrice: {

  //   defaultValue:
  // }
})

module.exports = ShoppingCart;