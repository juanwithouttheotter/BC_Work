const express = require('express');
const exphbs = require("express-handlebars");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
];


app.get("/vanilla", function (req, res) {
    res.render("index", icecreams[0]);
});
app.get("/chocolate", function (req, res) {
    res.render("index", icecreams[1]);
});
app.get("/banana", function (req, res) {
    res.render("index", icecreams[2]);
});
app.get("/greentea", function (req, res) {
    res.render("index", icecreams[3]);
});
app.get("/jawbreakers", function (req, res) {
    res.render("index", icecreams[4]);
});
app.get("/pistachio", function (req, res) {
    res.render("index", icecreams[5]);
});

app.get("/icecreams", function (req, res) {
    res.render("all-icecream", {
        flavor: icecreams
    });
});


app.listen(PORT, () => console.log(`API is listening to port ${PORT}`));