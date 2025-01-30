// const mysql = require('mysql2');
// require('dotenv').config(); // To use environment variables

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || '

//   password: process.env.DB_PASSWORD || '1830',
//   database: process.env.DB_NAME || 'artistdb',
//   waitForConnections: true
//   connect io
const { Sequelize } = require('sequelize');
// Set up the connection to the MySQL 
const sequelize = new Sequelize('sql5755850', 'sql5755850', 'yA6Bby83hg', {
  host: 'sql5.freesqldatabase.com',
  dialect: 'mysql',
});

module.exports = sequelize;
