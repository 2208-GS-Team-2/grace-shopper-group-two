const db = require("./db");
const User = require("./User");

//!use uuids
//!create products thru table

const merch = [
    {
      id: 1,
      name: 'White-Shirt',
      price: '24',
      description: 'lorem',
      img: ''
    },
    {
      id: 2,
      name: 'Stickers',
      price: '2',
      description: 'lorem',
      img: ''
    },
    {
      id: 3,
      name: 'Blue-Shirt',
      price: '10',
      description: 'lorem',
      img: ''
    },
    {
      id: 4,
      name: 'Cup',
      price: '15',
      description: 'lorem',
      img: ''
    },
    {
      id: 5,
      name: 'Cup-Sleeve',
      price: '10',
      description: 'lorem',
      img: ''
    },
    {
      id: 6,
      name: 'Hat',
      price: '10',
      description: '',
      img: ''
    },
    {
      id: 7,
      name: 'Coffe-Mug',
      price: '20',
      description: 'lorem',
      img: ''
    },
    {
      id: 8,
      name: 'Tumbler',
      price: '10',
      description: 'insulated cup',
      img: '',
    },
    {
      id: 9,
      name: 'Hat2',
      price: '10',
      description: 'lorem',
      img: '' },
    {
      id: 10,
      name: 'Shirt-logo',
      price: '5',
      description: 'lorem',
      img: '' },
  ];

  const equipment = [
    {
      id: 1,
      name: 'Espesso-machine',
      price: '',
      description: '',
      img: '',
      brewMethod: 'espresso',
    },
    {
      id: 2,
      name: 'EK43 ',
      price: '',
      description: '',
      img: '',
      brewMethod: ['espresso', 'filter'],
    },
    {
      id: 3,
      name: 'Chemex-brewer',
      price: '',
      description: '',
      img: '',
      brewMethod: 'filter',
    },
    {
      id: 4,
      name: 'V60-brewer',
      price: '',
      description: '',
      img: '',
      brewMethod: 'filter',
    },
    {
      id: 5,
      name: 'French-Press',
      price: '',
      description: '',
      img: '',
      brewMethod: 'filter',
    },
  ];

  const coffeeBeans = [
    {
      id: 1,
      name: 'Drip House Blend',
      price: '20',
      origin: 'Ethiopia',
      description: '',
      roastLevel: 'medium',
      type: 'filter',
      treatmentProcess: 'washed + natural',
      img: '',
    },
    {
      id: 2,
      name: 'Ethiopian',
      price: '25',
      origin: 'Ethiopia',
      description: 'from East Guji',
      roastLevel: 'medium',
      type: 'filter',
      treatmentProcess: 'washed',
      img: '',
    },
    {
      id: 3,
      name: 'Espresso House Blend',
      price: '18',
      origin: ['Ethiopian', 'Guatemalan'],
      description: '',
      roastLevel: 'medium',
      type: 'espresso',
      treatmentProcess: 'washed + natuarl',
      img: '',
    },
    {
      id: 4,
      name: 'Decaf Colombian',
      price: '18',
      origin: 'Colombia',
      description: 'decaf',
      roastLevel: 'dark',
      type: ['espresso', 'filter'],
      treatmentProcess: 'washed',
      img: '',
    },
    {
      id: 5,
      name: 'Colombian',
      price: '25',
      origin: 'Colombia',
      description: '',
      roastLevel: 'light',
      type: 'filter',
      treatmentProcess: 'natural',
      img: '',
    },
    {
      id: 6,
      name: 'Guatemalan',
      price: '25',
      origin: 'huista',
      description: '',
      roastLevel: 'medium',
      type: 'filter',
      treatmentProcess: 'washed',
      img: '',
    },

  ];


const seed = async () => {
    await db.sync({ force: true });

    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: 'steve', password: '123' }),
        User.create({ username: 'lena', password: '123' }),
        User.create({ username: 'topher', password: '123' }),
        User.create({ username: 'anton', password: '123' }),
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