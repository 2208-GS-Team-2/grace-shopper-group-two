const db = require('./db');
const User = require('./User');
const seed = require('./seed');

module.exports = {
    seed,
    CoffeeBean,
    Equipment,

    User,
    db
};
