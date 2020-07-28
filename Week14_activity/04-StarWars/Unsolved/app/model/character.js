const Sequelize = require('sequelize');
const sequelize = require('./config/connection.js');

const character = sequelize.define(`allcharacters`, {
    
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forePoints: Sequelize.INTEGER
});

character.sync();

module.exports = character;