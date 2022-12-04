const db = require("./db");
const Sequelize = require("sequelize");
const { INTEGER, UUID, UUIDV4 } = require("sequelize");

const CartProduct = db.define("CartProduct", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  price: {
    type: INTEGER,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
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
