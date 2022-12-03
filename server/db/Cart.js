const db = require("./db");
const { INTEGER, TEXT, STRING, UUID, UUIDV4 } = db.Sequelize;


const Cart = db.define("cart", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  // userId: {
  //   type: u
  // }
  // totalPrice: {
  //   type: INTEGER,
  //   allowNull: true,
  //   defaultValue: 0,
  // },
  // items: {
  //   type: TEXT,
  //   allowNull: false,
  // }
})




module.exports = Cart;