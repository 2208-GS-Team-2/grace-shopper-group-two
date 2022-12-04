const db = require('./db');
const User = require('./User');
const ShoppingCart = require('./ShoppingCart');
const CartProduct = require('./CartProduct');
const Order = require('./Order');
const Product = require('./Product');


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

// //*relating Products to User via ShoppingCart
// Product.belongsToMany(User, { through: ShoppingCart})
// User.belongsToMany(Product, { through: ShoppingCart})

ShoppingCart.belongsToMany(Product, {through: CartProduct})
Product.belongsToMany(ShoppingCart, {through: CartProduct})


ShoppingCart.belongsTo(User);

Order.hasMany(Product)
Product.hasMany(Order)

module.exports = {
    Product,
    ShoppingCart,
    CartProduct,
    User,
    Order,
    db
};
