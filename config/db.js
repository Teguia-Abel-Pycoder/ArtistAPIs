tthh// const mysql = require('mysql2');
// require('dotenv').config(); // To use environmen variables
// // Create a MySQL

//   password: process.env.DB_
//   database: process.env.ggDB_NAME || artistdb',
const { Sequelize } = require('sequelize');
// Set up the connection to the MySQL 
const sequelize = new Sequelize('sql5755850', 'sql5755850', 'yA6Bby83hg', {
  host: 'sql5.freesqldatabase.com',
  dialect: 'mysql',
});

module.exports = sequelize;
