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
    get: async function() {
      const products = await this.getProducts();
      const itemTotalPrice = products[0].CartProduct.itemTotalPrice;
      const totalPrice = itemTotalPrice;
      console.log(totalPrice);
      return totalPrice;
    },
  },
  quantity: {
    type: INTEGER,
    allowNull: true,
    get() {
      return this.products.length;
    },
  },
});

module.exports = Cart;
