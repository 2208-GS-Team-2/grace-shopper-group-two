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
    img: '',
  },
  {
    name: 'Ethiopian',
    price: '2500',
    origin: 'Ethiopia',
    description: 'from East Guji',
    roastLevel: 'medium',
    type: 'coffeeBean',
    treatmentProcess: 'washed',
    img: '',
  },
  {
    name: 'Decaf Colombian',
    price: '1800',
    origin: 'Colombia',
    description: 'decaf',
    roastLevel: 'dark',
    type: 'coffeeBean',
    treatmentProcess: 'washed',
    img: '',
  },
];

const carts = [
  { totalPrice: 200, quantity: 2 },
  { totalPrice: 10, quantity: 5 },
];

const seed = async () => {
  await db.sync({ force: true });

  // const cartProduct = await CartProduct.create({
  //   userId: User.userId,
  //   productId: Product.productId,
  // });

  // console.log('cartProduct', cartProduct);
  console.log('CREATING PRODUCTS...');

  const [product1, product2, product3] = await Promise.all(
    products.map((item) => Product.create(item))
  );

  const [cart1, cart2] = await Promise.all(
    carts.map((cartItem) => Cart.create(cartItem))
  );
  console.log('cart1', cart1);
  const [steve, lena, topher, anton] = await Promise.all([
    User.create({ username: 'steve', password: '123' }),
    User.create({ username: 'lena', password: '123' }),
    User.create({ username: 'topher', password: '123' }),
    User.create({ username: 'anton', password: '123' }),
  ]);

  cart1.addProducts([product1, product2]);
  console.log('DONE RUNNING SEED...');
};

module.exports = seed;
