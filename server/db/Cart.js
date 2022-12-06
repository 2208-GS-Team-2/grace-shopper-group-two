const db = require("./db");
const { INTEGER, UUID, UUIDV4 } = db.Sequelize;
const Cart = db.define("cart", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  totalPrice: {
    type: INTEGER,
    allowNull: true,
    defaultValue: 0,
    //! get a total price it all items in this cart
    // get: function() {
      // const products = this.getProducts();

      // const itemTotalPrice = products[0].CartProduct.itemTotalPrice;
      // const totalPrice = itemTotalPrice;
      // console.log("💰", totalPrice);
      // return this.totalPrice = ; //totalPrice;
    // },
  },
  cartQuantity: {
    type: INTEGER,
    allowNull: true,
    get: function() {
       const quantities = this.products.map(product => product.CartProduct.productQuantity)
       const initialValue = 0;
       const sumQuantity = quantities.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      //  console.log("🤌", sumQuantity)
       return this.cartQuantity = sumQuantity;
    },
  },
});

module.exports = Cart;
