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
    name: 'Drip House Blend',
    price: '2000',
    origin: 'Ethiopia',
    description: 'lorem',
    roastLevel: 'medium',
    type: 'coffeeBean',
    treatmentProcess: 'washed/natural',
    img: '',
  },
  {
    name: 'Espresso House Blend',
    price: '1800',
    origin: 'Ethiopian/Guatemalan',
    description: 'lorem',
    roastLevel: 'medium',
    type: 'coffeeBean',
    treatmentProcess: 'washed/natural',
    img: '',
  },
  {
    name: 'Colombian',
    price: '2500',
    origin: 'Colombia',
    description: 'lorem',
    roastLevel: 'light',
    type: 'coffeeBean',
    treatmentProcess: 'natural',
    img: '',
  },
  {
    name: 'Guatemalan',
    price: '2500',
    origin: 'huista',
    description: 'lorem',
    roastLevel: 'medium',
    type: 'coffeeBean',
    treatmentProcess: 'washed',
    img: '',
  },
  {
    name: 'Espesso-machine',
    price: '10000',
    description: 'lorem',
    img: '',
    brewMethod: 'espresso',
    type: 'equipment',
  },
  {
    name: 'EK43 ',
    price: '100000',
    description: 'lorem',
    img: 'static/images/mahlkonig-ek43-black-front-angle-wbg__26387.jpeg',
    brewMethod: 'espresso/filter',
    type: 'equipment',
  },
  {
    name: 'Chemex-brewer',
    price: '10000',
    description: 'lorem',
    img: '',
    brewMethod: 'filter',
    type: 'equipment',
  },
  {
    name: 'V60-brewer',
    price: '10000',
    description: 'lorem',
    img: '',
    brewMethod: 'filter',
    type: 'equipment',
  },
  {
    name: 'French-Press',
    price: '10000',
    description: 'lorem',
    img: '',
    brewMethod: 'filter',
    type: 'equipment',
  },
  {
    name: 'White-Shirt',
    price: '2400',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Stickers',
    price: '200',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Blue-Shirt',
    price: '1000',
    description: 'lorem',
    img: 'static/images/M10093625_7.webp',
    type: 'merch',
  },
  {
    name: 'Cup',
    price: '1500',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Cup-Sleeve',
    price: '1000',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Hat',
    price: '1000',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Coffe-Mug',
    price: '2000',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Tumbler',
    price: '1000',
    description: 'insulated cup',
    img: '',
    type: 'merch',
  },
  {
    name: 'Hat2',
    price: '1000',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
  {
    name: 'Shirt-logo',
    price: '500',
    description: 'lorem',
    img: '',
    type: 'merch',
  },
];

const carts = [
  { totalPrice: 200 },
  { totalPrice: 10 },
  { totalPrice: 10 },
  { totalPrice: 10 },
];

const seed = async () => {
  await db.sync({ force: true });

  console.log('CREATING PRODUCTS...');
  const [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
    product18,
    product19,
    product20,
    product21,
  ] = await Promise.all(products.map((item) => Product.create(item)));

  const [steve, lena, topher, anton] = await Promise.all([
    User.create({ username: 'steve', password: '123' }),
    User.create({ username: 'lena', password: '123' }),
    User.create({ username: 'topher', password: '123' }),
    User.create({ username: 'anton', password: '123' }),
    // allow null password User.create({ username: "anton", password: NULL }),
  ]);

  const [cart1, cart2, cart3, cart4] = await Promise.all(
    carts.map((cartItem) => Cart.create(cartItem))
  );

  cart1.addProducts([product1, product2]);
  cart2.addProducts([product1, product2, product3]);
  cart3.addProducts([product16, product10, product15]);
  cart4.addProducts([
    product8,
    product21,
    product14,
    product11,
    product15,
    product6,
    product7,
  ]);

  cart1.setUser(steve);
  cart2.setUser(anton);
  cart3.setUser(topher);
  cart4.setUser(lena);
  console.log('DONE RUNNING SEED...');
};

module.exports = seed;
