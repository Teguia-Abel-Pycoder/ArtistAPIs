const { createArtistLogic, getArtistsLogic, deleteArtistsLogic, updateArtistLogic } = require('../services/artistService');  // Import logic from service

// Controller function to create an artist
const createArtist = async (req, res) => {
  try {
    const { artistId, artistName, stageName, numberOfAlbums, artistRating, recordLabel, publishingHouse, careerStartDate } = req.body;

    // Check if the image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Artist image is required' });
    }

    const artistImage = `/uploads/artists/${req.file.filename}`;  // Store the image path

    // Validate required fields
    if (!artistId || !artistName || !stageName || !numberOfAlbums || !artistRating || !recordLabel || !publishingHouse || !careerStartDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const artistData = {
      artistId,
      artistImage,  // Include the image path in the artist data
      artistName,
      stageName,
      numberOfAlbums,
      artistRating,
      recordLabel,
      publishingHouse,
      careerStartDate
    };

    // Call the service to create the artist
    const artist = await createArtistLogic(artistData);

    // Respond with the created artist
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating artist', error: error.message });
  }
};

// Controller function to fetch all artists
const getAllArtists = async (req, res) => {
  try {
    const artists = await getArtistsLogic();  // Call the service to fetch artists

    // Respond with the list of artists
    res.status(200).json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching artists', error: error.message });
  }
};

// Controller function to delete artists
const deleteArtists = async (req, res) => {
  try {
    const { ids } = req.params;  // Get the comma-separated list of artist IDs from the URL

    // Call the service to delete the artists
    const deletedCount = await deleteArtistsLogic(ids);

    // If no artists were deleted
    if (deletedCount === 0) {
      return res.status(404).json({ message: 'No artists found with the provided IDs' });
    }

    // Respond with a success message, including the number of deleted artists
    res.status(200).json({ message: `${deletedCount} artist(s) deleted successfully` });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ message: 'Error deleting artists', error: error.message });
  }
};

// Controller function to update an artist
const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;  // Get the artist ID from the URL params
    const { artistId, artistImage, artistName, stageName, numberOfAlbums, artistRating, recordLabel, publishingHouse, careerStartDate } = req.body;

    // Check if required fields are provided
    if (!artistId || !artistImage || !artistName || !stageName || !numberOfAlbums || !artistRating || !recordLabel || !publishingHouse || !careerStartDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Prepare updated artist data
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

    // Call the service to update the artist
    const updatedArtist = await updateArtistLogic(id, updatedData);

    // If no artist was found with the provided ID
    if (!updatedArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    // Respond with the updated artist
    res.status(200).json(updatedArtist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating artist', error: error.message });
  }
};

module.exports = { createArtist, getAllArtists, deleteArtists, updateArtist };
