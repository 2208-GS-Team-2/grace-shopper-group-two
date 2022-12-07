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
      // const totalPrice = this.productQuantity * this.productPrice;
      // console.log('💩Product Price', this.productPrice);
      // return totalPrice;
      // const products = this.products;
      // const producstMapping = products.map((product) => product.price);
      // console.log(producstMapping);
      // const productQuantityInCart = this.productQuantity;

      // const itemPrice = this.Product;
      // console.log(itemPrice);
      // console.log('**carts ', carts);
      // console.log('productQuantityInCart', productQuantityInCart);
    },
  },
});

module.exports = CartProduct;
