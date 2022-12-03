const db = require('./db');
const User = require('./User');
const Order = require('./Order');
const Product = require('./Product');
const seed = require('./seed');

//!create associations here
//order association
//order has many products-- and vice versa?
//through table?
//*user shopping becomes an order
//*that order has user.id into order table
//*user also has a order.id
//!How to seed order through table

// order to usr is one to many relationship
//*this is a good association pair
Order.belongsTo(User)
User.hasMany(Order)

// User.hasMany(Order)

//product to order is many-to-many relationship
//* User association with Orders
//*order_products tables

//*shopping cart table


Order.hasMany(Product)
Product.hasMany(Order)


module.exports = {
    seed,
    Product,
    User,
    Order,
    db
};
