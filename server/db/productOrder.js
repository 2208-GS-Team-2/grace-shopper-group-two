const db = require("./db");
const { INTEGER, UUID, UUIDV4 } = db.Sequelize;

const productOrder = db.define("pastOrder", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  totalProductPrice: {
    type: INTEGER,
    allowNull: false,
  },
  totalProductPrice: {
    type: INTEGER,
    allowNull: false,
  },
  productQuantity: {
    type: INTEGER,
    defaultValue: 1,
  },
});

module.exports = productOrder;
