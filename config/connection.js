require('dotenv').config();
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
});

const testConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection with database has been established successfully.');
    } catch (error) {
        console.error("Unable to establish connection to the database ", error)
    }
};

testConnection();


module.exports = {sequelize}