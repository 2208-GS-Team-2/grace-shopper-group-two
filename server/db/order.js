const db = require("./db");
const {STRING, ENUM, INTEGER, UUID, UUIDV4 } = db.Sequelize;

// Order History

const Order = db.define('order', {
  confirmationNumber: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  numberOfItems:{
    type: INTEGER,
    allowNull: false,
  },
  totalPrice:{
    type: INTEGER,
    allowNull: false,
  },
  shipmentMethod: {
    type: ENUM("free", "expedited"),
    allowNull: false,
  },
});

module.exports = Order;