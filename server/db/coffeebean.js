const Sequelize = require("sequelize");
const db = require("./db");
const { UUID, UUIDV4 } = db.Sequelize;

const CoffeeBean = db.define("coffeeBean", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  origin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  roastLevel: {
    type: Sequelize.ENUM("light", "medium", "dark"),
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM("espresso", "filter"),
    allowNull: false,

  },
  treatmentProcess: {
    type: Sequelize.INTEGER,
    allowNull: false,

  },
  img: {
    //!How do I do this?
    type: Sequelize.BLOB,
    //allowNull: false,

  },
})

module.exports = CoffeeBean;