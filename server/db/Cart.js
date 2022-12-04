const db = require('./db');
const { STRING, INTEGER, UUID, UUIDV4 } = db.Sequelize;

const Cart = db.define('cart', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  totalPrice: {
    type: INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  quantity: {
    type: INTEGER,
    allowNull: true,
  },
});

module.exports = Cart;
