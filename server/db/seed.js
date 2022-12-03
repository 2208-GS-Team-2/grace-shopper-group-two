const db = require("./db");
const User = require("./User");

//!use uuids
//!create a products thru table


const products = [
  {
    name: "Decaf Colombian",
    price: "1800",
    origin: "Colombia",
    description: "decaf",
    roastLevel: "dark",
    type: "coffeeBean",
    treatmentProcess: "washed",
    img: "",
  },
  {
    name: "Ethiopian",
    price: "2500",
    origin: "Ethiopia",
    description: "from East Guji",
    roastLevel: "medium",
    type: "coffeeBean",
    treatmentProcess: "washed",
    img: "",
  },
  {
    name: "Decaf Colombian",
    price: "1800",
    origin: "Colombia",
    description: "decaf",
    roastLevel: "dark",
    type: "coffeeBean",
    treatmentProcess: "washed",
    img: "",
  },
]

const merch = [
    {
      name: "White-Shirt",
      price: "2400",
      description: "lorem",
      img: ""
    },
    {
      name: "Stickers",
      price: "200",
      description: "lorem",
      img: ""
    },
    {
      name: "Blue-Shirt",
      price: "1000",
      description: "lorem",
      img: ""
    },
    {
      name: "Cup",
      price: "1500",
      description: "lorem",
      img: ""
    },
    {
      name: "Cup-Sleeve",
      price: "1000",
      description: "lorem",
      img: ""
    },
    {
      name: "Hat",
      price: "1000",
      description: "lorem",
      img: ""
    },
    {
      name: "Coffe-Mug",
      price: "2000",
      description: "lorem",
      img: ""
    },
    {
      name: "Tumbler",
      price: "1000",
      description: "insulated cup",
      img: "",
    },
    {
      name: "Hat2",
      price: "1000",
      description: "lorem",
      img: "" },
    {
      name: "Shirt-logo",
      price: "500",
      description: "lorem",
      img: "" },
  ];

  const equipment = [
    {
      name: "Espesso-machine",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "espresso",
      type: ""
    },
    {
      name: "EK43 ",
      price: "100000",
      description: "lorem",
      img: "",
      brewMethod: "espresso/filter",
      type: ""
    },
    {
      name: "Chemex-brewer",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "filter",
      type: ""
    },
    {
      name: "V60-brewer",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "filter",
      type: ""
    },
    {
      name: "French-Press",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "filter",
      type: ""
    },
  ];
//coffeeBean is in product
  const coffeeBean = [
    {
      name: "Drip House Blend",
      price: "2000",
      origin: "Ethiopia",
      description: "lorem",
      roastLevel: "medium",
      type: "coffeeBean",
      treatmentProcess: "washed/natural",
      img: "",
    },
    {
      name: "Ethiopian",
      price: "2500",
      origin: "Ethiopia",
      description: "from East Guji",
      roastLevel: "medium",
      type: "coffeeBean",
      treatmentProcess: "washed",
      img: "",
    },
    {
      name: "Espresso House Blend",
      price: "1800",
      origin: "Ethiopian/Guatemalan",
      description: "lorem",
      roastLevel: "medium",
      type: "coffeeBean",
      treatmentProcess: "washed/natural",
      img: "",
    },
    {
      name: "Decaf Colombian",
      price: "1800",
      origin: "Colombia",
      description: "decaf",
      roastLevel: "dark",
      type: "coffeeBean",
      treatmentProcess: "washed",
      img: "",
    },
    {
      name: "Colombian",
      price: "2500",
      origin: "Colombia",
      description: "lorem",
      roastLevel: "light",
      type: "coffeeBean",
      treatmentProcess: "natural",
      img: "",
    },
    {
      name: "Guatemalan",
      price: "2500",
      origin: "huista",
      description: "lorem",
      roastLevel: "medium",
      type: "coffeeBean",
      treatmentProcess: "washed",
      img: "",
    },

  ];
  //! Note: make user order looks like an array
  //! use this?

const seed = async () => {
    await db.sync({ force: true });
    console.log('CREATING PRODUCTS...');

    //!Create products table
    // const [
    //   product1,
    //   product2,
    //   product3,
    // ] = await Promise.all(products.map((product)=>Product.create(product)))

    //!Create a dummy Order

    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: "steve", password: "123" }),
        User.create({ username: "lena", password: "123" }),
        User.create({ username: "topher", password: "123" }),
        User.create({ username: "anton", password: "123" }),
    ]);
    console.log('DONE RUNNING SEED...')
    return {
        users: {
            moe,
            lucy,
            larry,
            ethyl
        },
    };
};

module.exports = seed;