const Sequelize = require("sequelize");
const db = require("./db");
const { ENUM, INTEGER, TEXT, STRING, UUID, UUIDV4 } = db.Sequelize;

const CoffeeBean = db.define("coffeeBean", {
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
  },
  origin: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: TEXT,
    allowNull: false,
  },
  roastLevel: {
    type: ENUM("light", "medium", "dark"),
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: false,
  },
  treatmentProcess: {
    type: STRING,
    allowNull: false,
  },
  img: {
    //!How do I do this?
    type: STRING,
    //allowNull: false,
  },
})

module.exports = CoffeeBean;