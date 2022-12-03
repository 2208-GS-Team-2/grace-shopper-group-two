const app = require('./app');
const seed = require('./db/seed');

const init = async () => {
    try {
        await seed(); //!comment out if needed
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`🚀listening on port: ${port} 🛒🔗 http://localhost:${port} 🛒`));
    }
    catch (ex) {
        console.log(ex);
    }
};

init();



