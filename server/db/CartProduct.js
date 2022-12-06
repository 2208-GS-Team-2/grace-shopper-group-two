const db = require('./db');
const Sequelize = require('sequelize');
const { INTEGER, UUID, UUIDV4 } = require('sequelize');

const CartProduct = db.define('CartProduct', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  // productPrice: {
  //   type: INTEGER,
  //   get() {
  //     // get: function() {
  //     // return this.productPrice = cart.product.price
  //     // return this.productPrice = this.product.price;
  //     // console.log("💩", products.map(product => product.price) );
  //     // return this.productPrice = this.price;
  //   },
  // },
  productQuantity: {
    type: INTEGER,
    defaultValue: 2,
  },
  itemTotalPrice: {
    type: INTEGER,
    get() {
      // const totalPrice = this.productQuantity * this.productPrice;
      // console.log('💩Product Price', this.productPrice);
      // return totalPrice;
      // const products = this.products;
      // const producstMapping = products.map((product) => product.price);
      // console.log(producstMapping);
      const productQuantityInCart = this.productQuantity;

      const carts = this.products;
      console.log('**carts ', carts);
      console.log('productQuantityInCart', productQuantityInCart);
    },
  },
});

module.exports = CartProduct;
