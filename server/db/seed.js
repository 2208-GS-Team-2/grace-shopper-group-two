const db = require("./db");
const { User, Product, Cart, Review } = require("./");

const products = [
  {
    name: "Decaf Colombian",
    price: "1810",
    origin: "Colombia",
    description:
      "decaf coffee bean,The Sugar Cane Method (or Colombian Decaf Method) With the Sugar Cane Process, which originated in Colombia, caffeine is extracted from the coffee by immersing it in a by-product of sugar cane (natural ethyl acetate) and water until the caffeine is extracted.",
    roastLevel: "dark",
    type: "coffeeBean",
    treatmentProcess: "washed",
    img: "static/images/decaf-1.jpeg",
  },
  {
    name: "Ethiopian",
    price: "2500",
    origin: "Yirgacheffe, Ethiopia",
    description:
      "Ah, the motherland of all coffee: this washed Ethiopia is incredibly clean and floral, with notes of green tea and sweet citrus. We think this is excellent when prepared as a pourover.",
    roastLevel: "light",
    type: "coffeeBean",
    treatmentProcess: "washed",
    img: "static/images/Ethiopia-Yirgacheffe-Idido-Gr-1-Washed.jpeg",
  },
  {
    name: "Drip House Blend",
    price: "2000",
    origin: "Ethiopia, Colombia",
    description:
      "This blend behaves consistently is quite stable during roasting. It tastes super clean and chocolaty, nutty, very decent.",
    roastLevel: "medium",
    type: "coffeeBean",
    treatmentProcess: "washed/natural",
    img: "static/images/drip house blend.jpeg",
  },
  {
    name: "Espresso House Blend",
    price: "3000",
    origin: "Ethiopian/Guatemalan",
    description:
      "Our house blend tastes great as espresso and fantastic with milk or milk-alternatives to make the espresso-based beverage of your choice.",
    roastLevel: "medium",
    type: "coffeeBean",
    treatmentProcess: "washed/natural",
    img: "static/images/house blend spro.jpeg",
  },
  {
    name: "Geisha",
    price: "1900",
    origin: "Colombia",
    description:
      "Geisha is an extremely desirable varietal that is difficult to raise and process. We spent a lot of time iterating to find the perfect roasting curve for this special coffee; we are excited to share what we have found.",
    roastLevel: "light",
    type: "coffeeBean",
    treatmentProcess: "natural",
    img: "static/images/geisha crown jew.jpeg",
  },
  {
    name: "Guatemalan",
    price: "2500",
    origin: "Concepcion Huista",
    description:
      "This coffee is a principle element of our espresso blend, perfectly balancing the natural Ethiopian we roast it with. On its own it has a nice body with a hint of chocolate, perfect for drip and pour over.",
    roastLevel: "medium",
    type: "coffeeBean",
    treatmentProcess: "washed",
    img: "static/images/COUNTER-CULTURE-CONCEPCION-HUI-2T.jpeg",
  },
  {
    name: "L.A.S.T KB90",
    price: "100000",
    description:
      "The KB90 is the ultimate evolution of the Linea PB form.Designed to optimize the workflow for the barista in the world busiest bars by improving the ergonomics and features of the machine.",
    img: "static/images/L.A.S.T KB90.webp",
    brewMethod: "espresso",
    type: "equipment",
  },
  {
    name: "EK43 ",
    price: "100000",
    description:
      "The EK43 has conquered the international coffee specialty industry and rules as the undisputed queen of coffee grinders with high performance, reliability and premium grinding results. Its outstanding grinding profile remains unmatched.",
    img: "static/images/mahlkonig-ek43-black-front-angle-wbg__26387.jpeg",
    brewMethod: "espresso/filter",
    type: "equipment",
  },
  {
    name: "Chemex-brewer",
    price: "6000",
    description:
      "The Chemex Coffee Maker is a pour over style coffee-maker invented in 1941 by the German chemist Dr. Peter Schlumbohm. Coffee is often produce with a silky body and sweet tasting profile. ",
    img: "static/images/chemex-2.jpeg",
    brewMethod: "filter",
    type: "equipment",
  },
  {
    name: "V60-brewer",
    price: "2000",
    description:
      "My favourite brewer so far, pretty afforadle and simple, best performance brew-method by L.A.S.T champion barista",
    img: "static/images/v60brewer.jpeg",
    brewMethod: "filter",
    type: "equipment",
  },
  {
    name: "French-Press",
    price: "10000",
    description:
      "old school, pretty classic, no skills required, just add hot water and wait then press. Heavy body and bold flavor, good for lazy people",
    img: "static/images/FrenchPress.jpeg",
    brewMethod: "filter",
    type: "equipment",
  },
  {
    name: "White-Shirt",
    price: "2400",
    description:
      "pure clean, what else can I ask for, only for the cool kids, and it is the best color ever",
    img: "static/images/whitecoffeeshirt.webp",
    type: "merch",
  },
  {
    name: "Stickers",
    price: "200",
    description:
      "L.A.S.T coffee shop stickers that has superpower, put it there and make it shiny",
    img: "static/images/Sticker.png",
    type: "merch",
  },
  {
    name: "Blue-Shirt",
    price: "1000",
    description: "awesome sharp color, suitable for different style",
    img: "static/images/bluecoffeeshirt.jpeg",
    type: "merch",
  },
  {
    name: "Cup",
    price: "1500",
    description:
      "to showcase the beauty of the coffee, this is the best vessel to put your coffee in without hesitation.",
    img: "static/images/glasscup.webp",
    type: "merch",
  },
  {
    name: "Cup-Sleeve",
    price: "1000",
    description: "for your weak hand, loser",
    img: "static/images/sleeve.webp",
    type: "merch",
  },
  {
    name: "Hat",
    price: "1000",
    description:
      "you can not find this hat anywhere else but L.A.S.T coffee shop.",
    img: "static/images/hat.webp",
    type: "merch",
  },
  {
    name: "Coffe-Mug",
    price: "2000",
    description:
      "trap the heat pretty well and its shape keeps the aroma sourrnding your nose",
    img: "static/images/coffeemug.jpeg",
    type: "merch",
  },
  {
    name: "Tumbler",
    price: "1000",
    description: "insulated cup",
    img: "static/images/TravelTumbler.webp",
    type: "merch",
  },
  {
    name: "Hat2",
    price: "1000",
    description: "vintage coffee hat only for the L.A.S.T coffee people",
    img: "static/images/hat2.webp",
    type: "merch",
  },
  {
    name: "Shirt-logo",
    price: "500",
    description: "beautiful latte art, unbeatable logo",
    img: "static/images/glasscup2.webp",
    type: "merch",
  },
];

const carts = [
  { totalPrice: 200 },
  { totalPrice: 10 },
  { totalPrice: 10 },
  { totalPrice: 10 },
];

const reviews = [
  { message: "good products", rating: 4 },
  { message: "bad products", rating: 2 },
];

const seed = async () => {
  console.log("STARTING SEED");
  await db.sync({ force: true });

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
    User.create({ username: "steve", password: "123" }),
    User.create({ username: "lena", password: "123" }),
    User.create({ username: "topher", password: "123" }),
    User.create({ username: "anton", password: "123" }),
    User.create({ username: "admin", password: "123", isAdmin: true }),
  ]);

  const [cart1, cart2, cart3, cart4] = await Promise.all(
    carts.map((cartItem) => Cart.create(cartItem))
  );

  const [review1, review2] = await Promise.all(
    reviews.map((reviewItem) => Review.create(reviewItem))
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

  review1.setProduct(product1);
  review2.setProduct(product2);
  review1.setUser(steve);
  review2.setUser(topher);

  cart1.setUser(steve);
  cart2.setUser(anton);
  cart3.setUser(topher);
  cart4.setUser(lena);
  console.log("DONE RUNNING SEED...");
};

module.exports = seed;
