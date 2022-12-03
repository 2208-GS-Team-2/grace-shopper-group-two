const db = require('./db');
const User = require('./User');
const ShoppingCart = require('./ShoppingCart');
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

//product to order is many-to-many relationship
//* User association with Orders
//*order_products tables

//*one to one relationship between user and cart
// User.hasOne(ShoppingCart)
// ShoppingCart.belongsTo(User)

//*relating Products to User via ShoppingCart
Product.belongsToMany(User, { through: ShoppingCart})
User.belongsToMany(Product, { through: ShoppingCart})

// Many to Many relationship between cart and product, we create the through table
// Cart.belongsToMany(Product, { through: CartProduct})
// Product.belongsToMany(Cart,{ through: CartProduct})

Order.hasMany(Product)
Product.hasMany(Order)


module.exports = {
    Product,
    ShoppingCart,
    User,
    Order,
    db
};
