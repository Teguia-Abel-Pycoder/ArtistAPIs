const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');  // Import the upload middleware

// Import the controller functions
const { createArtist, getAllArtists, deleteArtist, updateArtist } = require('../controllers/artistController');

// Define routes
router.post('/artists', upload.single('artistImage'), createArtist);  // Upload image and create artist
router.get('/artists', getAllArtists);  // Get request to fetch all artists
router.delete('/artists/:id', deleteArtist);  // Delete request to remove an artist by id
router.put('/artists/:id', updateArtist);  // Put request to update an artist by id

module.exports = router;
