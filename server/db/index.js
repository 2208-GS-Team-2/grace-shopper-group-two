const db = require('./db');
const User = require('./User');
const CartProduct = require('./cartProduct');
const Cart = require('./Cart');
const Product = require('./Product');

//One-to-One relationship between user and cart tables.
// user can have only one cart, and one cart can only belong to one user.
User.hasOne(Cart);
Cart.belongsTo(User);

//Many-to-Many relationship between cart and product tables.
//One cart can have multiple products, and one product can belong to many carts.
// We create a through table called cartProduct table.
Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });

module.exports = {
  Product,
  CartProduct,
  User,
  db,
  Cart,
};
