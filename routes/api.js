const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createArtist, getAllArtists, deleteArtists, updateArtist, getArtistDetails } = require('../controllers/artistController');

router.post('/artists', upload.single('artistImage'), createArtist);
router.get('/artists', getAllArtists);
router.delete('/artists/:ids', deleteArtists);
router.put('/artists/:id', updateArtist);
router.get('/artists/:id', getArtistDetails);

module.exports = router;
