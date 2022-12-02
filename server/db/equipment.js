const Sequelize = require("sequelize");
const db = require("./db");
const { UUID, UUIDV4 } = db.Sequelize;

const Equipment = db.define("equipment", {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM("espresso", "filter"),
    allowNull: false,
  },
  img: {
    //!How do I do this?
    type: TEXT,
    //allowNull: false,
  },
})

module.exports = Equipment;