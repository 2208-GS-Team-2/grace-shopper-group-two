const db = require('./db');
const { INTEGER, UUID, UUIDV4 } = db.Sequelize;
const Cart = db.define('cart', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },

  totalPrice: {
    type: INTEGER,
    allowNull: true,
    // defaultValue: 0,
    // ! get the total price of all items in the cart
    // get: function() {
    // const products = this.getProducts();
    // console.log("products", products)
    // const itemTotalPrice = products[0].CartProduct.itemTotalPrice;
    // const totalPrice = itemTotalPrice;
    // console.log("💰", totalPrice);
    // return this.totalPrice =  //totalPrice;
    // },
    // ! get the total price of all items in the cart
    get: function () {
      const products = this.products;
      console.log('products in cart', products);
      const producstMapping = products.map(
        (product) => product.price * product.CartProduct.productQuantity
      );
      const totalCartPrice = producstMapping.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      // console.log('totalCartPrice', totalCartPrice);
      return (this.totalPrice = totalCartPrice);
    },
  },

  totalPriceProductQuantity: {
    type: INTEGER,
    allowNull: true,
    defaultValue: 200,
    get: function () {
      const products = this.products;
      const producstMapping = products.map(
        (product) => product.price * product.CartProduct.productQuantity
      );
      return (this.totalPriceProductQuantity = producstMapping);
    },
  },

  cartQuantity: {
    type: INTEGER,
    allowNull: true,
    get: function () {
      const quantities = this.products.map(
        (product) => product.CartProduct.productQuantity
      );
      const initialValue = 0;
      const sumQuantity = quantities.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      //  console.log("🤌", sumQuantity)
      return (this.cartQuantity = sumQuantity);
    },
  },
});

module.exports = Cart;
