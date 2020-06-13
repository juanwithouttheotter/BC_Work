const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());