const db = require('./db');
const { User, Product, Cart, CartProduct } = require('./');

const products = [
  {
    name: 'Decaf Colombian',
    price: '1800',
    origin: 'Colombia',
    description: 'decaf',
    roastLevel: 'dark',
    type: 'coffeeBean',
    treatmentProcess: 'washed',
    img: 'static/images/colombianDecaf.png',
  },
  {
    name: 'Ethiopian',
    price: '2500',
    origin: 'Ethiopia',
    description: 'from East Guji',
    roastLevel: 'medium',
    type: 'coffeeBean',
    treatmentProcess: 'washed',
    img: 'static/images/EthiopianCoffe.png',
  },
  {
    name: 'Decaf Colombian',
    price: '1800',
    origin: 'Colombia',
    description: 'decaf',
    roastLevel: 'dark',
    type: 'coffeeBean',
    treatmentProcess: 'washed',
    img: 'static/images/colombianDecaf.png',
  },
];

const carts = [
  { userId: User.steve, totalPrice: 200, quantity: 2 },
  { totalPrice: 10, quantity: 5 },
];

const seed = async () => {
  await db.sync({ force: true });

  console.log('CREATING PRODUCTS...');
  const [product1, product2, product3] = await Promise.all(
    products.map((item) => Product.create(item))
  );

  const [steve, lena, topher, anton] = await Promise.all([
    User.create({ username: 'steve', password: '123' }),
    User.create({ username: 'lena', password: '123' }),
    User.create({ username: 'topher', password: '123' }),
    User.create({ username: 'anton', password: '123' }),
  ]);

  const [cart1, cart2] = await Promise.all(
    carts.map((cartItem) => Cart.create(cartItem))
  );

  cart1.addProducts([product1, product2]);
  cart2.addProducts([product1, product2, product3]);
  // User.steve.addCart(cart1);
  cart1.setUser(steve);
  console.log('DONE RUNNING SEED...');
};

module.exports = seed;
