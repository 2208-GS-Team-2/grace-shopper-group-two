const db = require('./db');
const User = require('./User');
const CoffeeBean = require('./coffeeBean');
const Equipment = require('./equipment');
const Order = require('./order');
const Merch = require('./merch');
const seed = require('./seed');



module.exports = {
    seed,
    Product,
    User,
    Order,
    db
};
