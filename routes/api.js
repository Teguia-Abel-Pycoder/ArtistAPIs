const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');  // Import the upload middleware

// Import the controller functions
const { createArtist, getAllArtists, deleteArtists, updateArtist } = require('../controllers/artistController');

// Define routes
router.post('/artists', upload.single('artistImage'), createArtist);  // Upload image and create artist
router.get('/artists', getAllArtists);  // Get request to fetch all artists
router.delete('/artists/:ids', deleteArtists);  // Delete request to remove artists by IDs
router.put('/artists/:id', updateArtist);  // Put request to update an artist by ID

module.exports = router;
