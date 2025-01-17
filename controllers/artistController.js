const { createArtistLogic, getArtistsLogic, deleteArtistsLogic, updateArtistLogic, getArtistDetailsLogic } = require('../services/artistService');
const upload = require('../middleware/upload');

// Create an artist
const createArtist = async (req, res) => {
  try {
    const { artistId, artistName, stageName, numberOfAlbums, artistRating, recordLabel, publishingHouse, careerStartDate } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Artist image is required' });
    }

    const artistImage = `/uploads/artists/${req.file.filename}`;  // Image path

    if (!artistId || !artistName || !stageName || !numberOfAlbums || !artistRating || !recordLabel || !publishingHouse || !careerStartDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const artistData = {
      artistId,
      artistImage,
      artistName,
      stageName,
      numberOfAlbums,
      artistRating,
      recordLabel,
      publishingHouse,
      careerStartDate
    };

    const artist = await createArtistLogic(artistData);
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating artist', error: error.message });
  }
};


const getAllArtists = async (req, res) => {
  try {
    const artists = await getArtistsLogic();
    res.status(200).json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching artists', error: error.message });
  }
};

// Delete artists by ID
const deleteArtists = async (req, res) => {
  try {
    const { ids } = req.params;
    const deletedCount = await deleteArtistsLogic(ids);

    if (deletedCount === 0) {
      return res.status(404).json({ message: 'No artists found with the provided IDs' });
    }

    res.status(200).json({ message: `${deletedCount} artist(s) deleted successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting artists', error: error.message });
  }
};

// Update artist details
const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const { artistId, artistImage, artistName, stageName, numberOfAlbums, artistRating, recordLabel, publishingHouse, careerStartDate } = req.body;

    if (!artistId || !artistImage || !artistName || !stageName || !numberOfAlbums || !artistRating || !recordLabel || !publishingHouse || !careerStartDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedData = {
      artistId,
      artistImage,
      artistName,
      stageName,
      numberOfAlbums,
      artistRating,
      recordLabel,
      publishingHouse,
      careerStartDate
    };

    const updatedArtist = await updateArtistLogic(id, updatedData);

    if (!updatedArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    res.status(200).json(updatedArtist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating artist', error: error.message });
  }
};

// Get artist details by ID
const getArtistDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await getArtistDetailsLogic(id);

    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    res.status(200).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching artist details', error: error.message });
  }
};

module.exports = { createArtist, getAllArtists, deleteArtists, updateArtist, getArtistDetails };
