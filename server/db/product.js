const db = require("./db");
const { ENUM, INTEGER, TEXT, STRING, UUID, UUIDV4 } = db.Sequelize;

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
    type: ENUM("light", "medium", "dark"),
    allowNull: true,
  },
  brewMethod: {
    type: STRING,
    allowNull: true
  },
  type: {
    type: ENUM,
    allowNull: false,
    values: ["EQUIPMENT", "MERCH", "COFFEEBEAN"],
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