const db = require('./db');
const { INTEGER, UUID, UUIDV4, VIRTUAL } = require('sequelize');
const Product = require('./product')

const CartProduct = db.define('CartProduct', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  productPrice: {
    type: VIRTUAL,
    get: async function() {
      const product = await Product.findByPk(this.productId)
      // console.log(product.price * this.productQuantity);
      // console.log(product.price);
      // console.log(typeof this.productPrice);
      // const totalPrice = product.price;
      return product.price;
    },
  },
  productQuantity: {
    type: INTEGER,
    defaultValue: 1,
  },
  itemTotalPrice: {
    type: INTEGER,
    get() {
      // const totalPrice = product.price * this.productQuantity
      // console.log(totalPrice);
      // return (this.productPrice = totalPrice);
      const totalPrice = this.quantity * this.price;
      return totalPrice;
    },
  },
});

module.exports = CartProduct;
