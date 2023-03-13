// require('dotenv').config()
const db = require("./db");
const { User, Product, Cart, Review } = require("./");

const products = [
	{
		name: "Decaf Colombian",
		price: "1810",
		origin: "Colombia",
		description:
			'A decaf coffee bean processed with the "sugar cane method", which originated in Colombia. Caffeine is extracted from the coffee by immersing it in a by-product of sugar cane (natural ethyl acetate) and water.',
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
			"Washed Ethiopian coffee beans are incredibly clean and floral, with notes of green tea and sweet citrus. We think this is excellent when prepared as a pour-over.",
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
			"This blend behaves consistently and is quite stable during roasting. Super clean, chocolaty, nutty and very decent.",
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
			"Our house blend tastes great and is fantastic with milk or milk-alternatives.",
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
			"Geisha is an extremely desirable varietal that is difficult to raise and process. We spent a lot of time iterating to find the perfect roasting curve for this special coffee and we are excited to share what we have found.",
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
			"This coffee is a principle element of our espresso blend. Perfectly balancing the natural Ethiopian with which we roast it. On its own it has a nice body with a hint of chocolate. Perfect for drip and pour over.",
		roastLevel: "medium",
		type: "coffeeBean",
		treatmentProcess: "washed",
		img: "static/images/COUNTER-CULTURE-CONCEPCION-HUI-2T.jpeg",
	},
	{
		name: "L.A.S.T KB90",
		price: "100000",
		description:
			"The KB90 is the ultimate evolution of the Linea PB. Designed to optimize workflow for the barista in the busiest of bars by improving ergonomics and its array of features.",
		img: "static/images/L.A.S.T KB90.webp",
		brewMethod: "espresso",
		type: "equipment",
	},
	{
		name: "EK43 ",
		price: "100000",
		description:
			"The EK43 has conquered the international coffee industry as the undisputed queen of coffee grinders with high performance, reliability, and premium grinding results.",
		img: "static/images/mahlkonig-ek43-black-front-angle-wbg__26387.jpeg",
		brewMethod: "espresso/filter",
		type: "equipment",
	},
	{
		name: "Chemex Brewer",
		price: "6000",
		description:
			"The Chemex Coffee Maker is a pour over style coffee-maker invented in 1941 by the German chemist Dr. Peter Schlumbohm. Coffee made with Chemex produces a silky body and sweet tasting profile.",
		img: "static/images/chemex-2.jpeg",
		brewMethod: "filter",
		type: "equipment",
	},
	{
		name: "V60 brewer",
		price: "2000",
		description:
			"A high quality yet very affordable brewer by L.A.S.T champion barista",
		img: "static/images/v60brewer.jpeg",
		brewMethod: "filter",
		type: "equipment",
	},
	{
		name: "French Press",
		price: "10000",
		description:
			"Classic french-press, just add hot water and press to make coffee with a heavy body and bold flavor, ",
		img: "static/images/FrenchPress.jpeg",
		brewMethod: "filter",
		type: "equipment",
	},
	{
		name: "White Shirt",
		price: "2400",
		description:
			"A clean white t-shirt, what else can I ask for? Only for cool kids",
		img: "static/images/whitecoffeeshirt.webp",
		type: "merch",
	},
	{
		name: "L.A.S.T. Logo Stickers",
		price: "200",
		description: "L.A.S.T coffee shop stickers",
		img: "static/images/Sticker.png",
		type: "merch",
	},
	{
		name: "Blue Shirt",
		price: "1000",
		description: "awesome sharp color, suitable for different style",
		img: "static/images/bluecoffeeshirt.jpeg",
		type: "merch",
	},
	{
		name: "Flight Sampler Cup Set",
		price: "1500",
		description: "A set of glass cups to sample a variety of coffee styles",
		img: "static/images/glasscup.webp",
		type: "merch",
	},
	{
		name: "Cup Sleeve",
		price: "1000",
		description: "Protect your hand from burning with this cup-sleeve.",
		img: "static/images/sleeve.webp",
		type: "merch",
	},
	{
		name: "Tan Coffee Cup Hat",
		price: "1000",
		description: "L.A.S.T coffee shop logo hat.",
		img: "static/images/hat.webp",
		type: "merch",
	},
	{
		name: "Coffe Mug",
		price: "2000",
		description:
			"This mug is insulated to keep your coffee warm while you enjoy it.",
		img: "static/images/coffeemug.jpeg",
		type: "merch",
	},
	{
		name: "Tumbler",
		price: "1000",
		description: "Insulated tumbler for all your coffee needs.",
		img: "static/images/TravelTumbler.webp",
		type: "merch",
	},
	{
		name: "Green Coffee Hat",
		price: "1000",
		description: "L.A.S.T coffee hat",
		img: "static/images/hat2.webp",
		type: "merch",
	},
	{
		name: "T-Shirt logo",
		price: "500",
		description: "T-Shirt with latte art, unbeatable logo",
		img: "static/images/glasscup2.webp",
		type: "merch",
	},
	{
		name: "China",
		price: "3000",
		origin: "Yunnan",
		description:
			"A quality coffee from China. We think you'll really enjoy this one.",
		roastLevel: "light",
		type: "coffeeBean",
		treatmentProcess: "natural",
		img: "static/images/yunnan.jpeg",
	},
	{
		name: "Golondrina",
		price: "1800",
		origin: "timbio colombia",
		description:
			"The Orgánica cooperative in the region of Cauca, Colombia, has produced coffee for our La Golondrina offering since 2007. La Golondrina has layered flavors of milk-chocolate, cherry, and nut.",
		roastLevel: "medium",
		type: "coffeeBean",
		treatmentProcess: "washed",
		img: "static/images/Counter-Culture-La-Golondrina-2.jpeg",
	},
	{
		name: "Finca El Puente",
		price: "6400",
		origin: "Honduras",
		description:
			"Honduras was the first country to cultivate Gesha, a variety that traces its origins to Ethiopia. Under their care, a plant of this pedigree creates an exceptional coffee with tropical fruit, lime, and delicate floral notes.",
		roastLevel: "light",
		type: "coffeeBean",
		treatmentProcess: "washed",
		img: "static/images/Finca_El_Puente_Gesha_12oz_box_2021-600x600.webp",
	},
	{
		name: "Iridescent",
		price: "2000",
		origin: "ethiopia, kenya, latin america",
		description:
			"Limited release! This is our winter blend, a combination of some of our best, most interesting coffees, and features notes of dark chocolate and berry. ",
		roastLevel: "medium",
		type: "coffeeBean",
		treatmentProcess: "washed, natural",
		img: "static/images/iridescent_2022-e1669992016607-600x600.webp",
	},
	{
		name: "Baroida",
		price: "2500",
		origin: "Papua New Guinea",
		description:
			"Despite the immense challenges of cultivating coffee in the beautiful remote highlands of Papua New Guinea, Nichol Colbran and his team at Baroida produce coffee so exceptional, we consider it the best in Papua New Guinea and, possibly, the entire Pacific.",
		roastLevel: "medium",
		type: "coffeeBean",
		treatmentProcess: "washed",
		img: "static/images/Baroida_12oz_bag_2019-e1640889948505-600x600.webp",
	},
	{
		name: "Hassan Assalol",
		price: "3000",
		origin: "Yemen",
		description:
			"Yemen is one of the oldest coffee-producing countries in the world, has played an integral role in coffee history and continues to be important to the future of coffee.",
		roastLevel: "medium",
		type: "coffeeBean",
		treatmentProcess: "natural",
		img: "static/images/Hassan_Assalol_NatSun_12oz_box_2021-1-600x600.webp",
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
