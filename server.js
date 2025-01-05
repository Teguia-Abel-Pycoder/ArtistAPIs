const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db'); // Sequelize connection

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Importing routes
const apiRoutes = require('./routes/api'); // Import API routes

// Use the API routes
app.use('/api', apiRoutes);

// Sync models to create tables if they don't exist
async function syncModels() {
  try {
    await sequelize.sync({ force: false }); // Force: false means tables won't be dropped
    console.log('Tables synced successfully!');
  } catch (error) {
    console.error('Error syncing tables:', error);
  }
}

// Call the sync function
syncModels();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
