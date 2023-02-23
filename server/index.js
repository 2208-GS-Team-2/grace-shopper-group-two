const app = require("./app");
const seed = require("./db/seed");
require('dotenv').config()


// dotenv.config();

const init = async () => {
	try {
		if (process.env.SEED === "true") seed();
		const port = process.env.PORT || 3000;
		app.listen(port, () => console.log(`🚀listening on port: ${port} 🛒🔗 http://localhost:${port} 🛒`));
	} catch (ex) {
		console.log(ex);
	}
};

init();
