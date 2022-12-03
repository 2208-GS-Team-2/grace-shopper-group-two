const { STRING } = require("sequelize");
const db = require("./db");
const {BOOLEAN, INTEGER, UUID, UUIDV4, ARRAY } = db.Sequelize;

// Order History

//! TO DO?
//! user.id's cart, turns into order.id with user.id inside.
//! lists a user's list of items ordered.

const Order = db.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  totalPrice: {
    type: INTEGER,
    allowNull: true,
    defaultValue: 0,
  },

  //! We can't use userId in here, blows the code up, we should use associations.
  // userId: {
  //   type: STRING,
  //   // type: ARRAY(UUID),
  //   allowNull: false,
  // },
  items: {
    type: STRING,
    allowNull: false,
  }
});

module.exports = Order;
