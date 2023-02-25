const db = require("./db");
const User = require("./User");
const CartProduct = require("./CartProduct");
const Cart = require("./Cart");
const Product = require("./Product");
const Review = require("./Review");


//One-to-One relationship between user and cart tables.
// user can have only one cart, and one cart can only belong to one user.
User.hasOne(Cart);
Cart.belongsTo(User);

//Many-to-Many relationship between cart and product tables.
//One cart can have multiple products, and one product can belong to many carts.
// We create a through table called cartProduct table.
Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });

//One-to-Many relationship between user and review.One user can have many reviews and one review can belong to one user.
User.hasMany(Review);
Review.belongsTo(User);

//One-to-Many relationship between product and review One product can have many reviews and one review can belong to one user.
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  Product,
  CartProduct,
  Review,
  User,
  db,
  Cart,
};
