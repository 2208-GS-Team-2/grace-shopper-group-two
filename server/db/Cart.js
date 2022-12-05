const db = require('./db');
const { STRING, INTEGER, UUID, UUIDV4 } = db.Sequelize;

const Cart = db.define('cart', {
  // id: {
  //   type: UUID,
  //   primaryKey: true,
  //   defaultValue: UUIDV4,
  // },
  totalPrice: {
    type: INTEGER,
    allowNull: true,
    defaultValue: 0,
    //get a total price it all items in this cart
    // get() {
    //   const totalPrice += this.product.price;
    //   return totalPrice;
    // },
  },
  quantity: {
    type: INTEGER,
    allowNull: true,
    // get() {
    //   return this.products.length;
    // },
  },
});

module.exports = Cart;
