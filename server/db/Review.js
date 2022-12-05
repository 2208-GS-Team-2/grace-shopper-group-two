const db = require('./db');
const { STRING, INTEGER, UUID, UUIDV4, TEXT } = db.Sequelize;

const Review = db.define('review', {
  message: {
    type: TEXT,
    allowNull: true,
  },
  rating: {
    type: INTEGER,
    validate: {
      min: 0,
      max: 5,
    },
  },
});

module.exports = Review;
