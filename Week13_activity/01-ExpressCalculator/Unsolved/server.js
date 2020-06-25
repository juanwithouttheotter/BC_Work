const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const PORT = 8080;


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const run = async (app) => {
    routes.route(app);
}
run(app);


app.listen(PORT, () => console.log(`API is listening to port ${PORT}`));