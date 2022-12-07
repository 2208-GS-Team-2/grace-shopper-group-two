const db = require('./db');
const { INTEGER, UUID, UUIDV4 } = require('sequelize');


const CartProduct = db.define('CartProduct', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  productPrice: {
    type: INTEGER,
  //   defaultValue: productId.price,
  //   get: async function () {

  //     console.log(prices.data);
  //   },
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
