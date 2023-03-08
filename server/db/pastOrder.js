const db = require("./db");
const { INTEGER, UUID, UUIDV4 } = db.Sequelize;

const pastOrder = db.define("pastOrder", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  totalPrice: {
    type: INTEGER,
    allowNull: false,
  },
});

module.exports = pastOrder;
