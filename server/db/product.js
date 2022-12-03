const db = require("./db");
const { INTEGER, TEXT, STRING, UUID, UUIDV4 } = db.Sequelize;

const Product = db.define("product", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: true,
  },
  price: {
    type: INTEGER,
    allowNull: false,
    validate: {
      isDecimal: false,
    }
  },
  origin: {
    type: STRING,
    allowNull: true,
  },
  description: {
    type: TEXT,
    allowNull: false,
  },
  roastLevel: {
    type: STRING,
    allowNull: true,
  },
  brewMethod: {
    type: STRING,
    allowNull: true
  },
  treatmentProcess: {
    type: STRING,
    allowNull: true,
  },
  img: {
    type: STRING,
    allowNull: false,
  },
})

module.exports = Product;