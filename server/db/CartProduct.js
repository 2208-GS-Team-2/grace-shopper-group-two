const db = require("./db");
const Sequelize = require("sequelize");
const { INTEGER, UUID, UUIDV4 } = require("sequelize");

const CartProduct = db.define("CartProduct", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  productPrice: {
    type: INTEGER,
    get() {
    // get: function() {
      // return this.productPrice = cart.product.price
      // return this.productPrice = this.product.price;
      // console.log("💩", products.map(product => product.price) );
      // return this.productPrice = this.price;
    }
  },
  productQuantity: {
    type: INTEGER,
    defaultValue: 2,
  },
  itemTotalPrice: {
    type: INTEGER,
    get() {
      const totalPrice = this.quantity * this.price;
      return totalPrice;
    },
  },
});

module.exports = CartProduct;
