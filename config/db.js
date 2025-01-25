// const mysql = require('mysql2');
// require('dotenv').config(); // To use environment variables

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '1830',
//   database: process.env.DB_NAME || 'artistdb',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // Export the pool for use in other parts of the app

const { Sequelize } = require('sequelize');

// Set up the connection to the MySQL database
const sequelize = new Sequelize('sql5755850', 'sql5755850', 'yA6Bby83hg', {
  host: 'sql5.freesqldatabase.com',
  dialect: 'mysql',
});

module.exports = sequelize;
