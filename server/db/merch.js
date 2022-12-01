
const Sequelize = require("sequelize");
const db = require("./db");
const { UUID, UUIDV4 } = db.Sequelize;

const Merch = db.define("merch", {
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
  img: {
    //!How do I do this?
    type: Sequelize.BLOB,
    //allowNull: false,
  },
})

module.exports = Merch;