const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`API is listening to port ${PORT}`))

//splitting up logic that does one purpose. each function is then 
//called from another file.