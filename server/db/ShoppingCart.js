const db = require("./db");
const Sequelize = require("sequelize");
const { INTEGER } = require("sequelize");

const ShoppingCart = db.define('shoppingCart', {
  //productId
  //userId
  //Quantity
  quantity: {
    type: INTEGER
  },
  //! this is attached to productId currentpriceperitem: {},
  //! maybe do this on front-end or a function within here
  // totalPrice: {

  //   defaultValue:
  // }
})

module.exports = ShoppingCart;