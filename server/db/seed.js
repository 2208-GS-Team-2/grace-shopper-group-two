const db = require("./db");
const User = require("./User");

//!use uuids
//!create a products thru table


const merch = [
    {
      id: 1,
      name: "White-Shirt",
      price: "2400",
      description: "lorem",
      img: ""
    },
    {
      id: 2,
      name: "Stickers",
      price: "200",
      description: "lorem",
      img: ""
    },
    {
      id: 3,
      name: "Blue-Shirt",
      price: "1000",
      description: "lorem",
      img: ""
    },
    {
      id: 4,
      name: "Cup",
      price: "1500",
      description: "lorem",
      img: ""
    },
    {
      id: 5,
      name: "Cup-Sleeve",
      price: "1000",
      description: "lorem",
      img: ""
    },
    {
      id: 6,
      name: "Hat",
      price: "1000",
      description: "lorem",
      img: ""
    },
    {
      id: 7,
      name: "Coffe-Mug",
      price: "2000",
      description: "lorem",
      img: ""
    },
    {
      id: 8,
      name: "Tumbler",
      price: "1000",
      description: "insulated cup",
      img: "",
    },
    {
      id: 9,
      name: "Hat2",
      price: "1000",
      description: "lorem",
      img: "" },
    {
      id: 10,
      name: "Shirt-logo",
      price: "500",
      description: "lorem",
      img: "" },
  ];

  const equipment = [
    {
      id: 1,
      name: "Espesso-machine",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "espresso",
    },
    {
      id: 2,
      name: "EK43 ",
      price: "100000",
      description: "lorem",
      img: "",
      brewMethod: ["espresso", "filter"],
    },
    {
      id: 3,
      name: "Chemex-brewer",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "filter",
    },
    {
      id: 4,
      name: "V60-brewer",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "filter",
    },
    {
      id: 5,
      name: "French-Press",
      price: "10000",
      description: "lorem",
      img: "",
      brewMethod: "filter",
    },
  ];

  const coffeeBeans = [
    {
      id: 1,
      name: "Drip House Blend",
      price: "2000",
      origin: "Ethiopia",
      description: "lorem",
      roastLevel: "medium",
      type: "filter",
      treatmentProcess: ["washed", "natural"],
      img: "",
    },
    {
      id: 2,
      name: "Ethiopian",
      price: "2500",
      origin: "Ethiopia",
      description: "from East Guji",
      roastLevel: "medium",
      type: "filter",
      treatmentProcess: "washed",
      img: "",
    },
    {
      id: 3,
      name: "Espresso House Blend",
      price: "1800",
      origin: ["Ethiopian", "Guatemalan"],
      description: "lorem",
      roastLevel: "medium",
      type: "espresso",
      treatmentProcess: ["washed" , "natural"],
      img: "",
    },
    {
      id: 4,
      name: "Decaf Colombian",
      price: "1800",
      origin: "Colombia",
      description: "decaf",
      roastLevel: "dark",
      type: ["espresso", "filter"],
      treatmentProcess: "washed",
      img: "",
    },
    {
      id: 5,
      name: "Colombian",
      price: "2500",
      origin: "Colombia",
      description: "lorem",
      roastLevel: "light",
      type: "filter",
      treatmentProcess: "natural",
      img: "",
    },
    {
      id: 6,
      name: "Guatemalan",
      price: "2500",
      origin: "huista",
      description: "lorem",
      roastLevel: "medium",
      type: "filter",
      treatmentProcess: "washed",
      img: "",
    },

  ];
console.log("testing")

const seed = async () => {
    await db.sync({ force: true });

    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: "steve", password: "123" }),
        User.create({ username: "lena", password: "123" }),
        User.create({ username: "topher", password: "123" }),
        User.create({ username: "anton", password: "123" }),
    ]);

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