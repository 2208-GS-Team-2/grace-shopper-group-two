const db = require('./db');
const { INTEGER, TEXT, STRING, UUID, UUIDV4 } = db.Sequelize;

const Product = db.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
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
    },
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
    allowNull: true,
  },
  treatmentProcess: {
    type: STRING,
    allowNull: true,
  },
  img: {
    type: STRING,
    allowNull: false,
    defaultValue:
      'https://images.unsplash.com/photo-1551610290-e153ec567dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
  },
});

module.exports = Product;
