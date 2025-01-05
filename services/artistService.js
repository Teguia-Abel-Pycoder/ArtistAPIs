const Artist = require('../models/artist.model');
 // Import the Artist model
const { Op } = require('sequelize');  // Ensure Op is included for Sequelize's "in" operator

// Logic to create an artist
const createArtistLogic = async (artistData) => {
  return await Artist.create(artistData);  // Pass the data to the model to create the artist
};

// Logic to fetch all artists
const getArtistsLogic = async () => {
  return await Artist.findAll();  // Fetch all artists from the database
};

// Logic to delete artists
const deleteArtistsLogic = async (ids) => {
  // Split the comma-separated IDs into an array and convert to integers
  const artistIds = ids.split(',').map(id => parseInt(id));

  // Use Sequelize to delete artists whose ID is in the artistIds array
  const deletedArtists = await Artist.destroy({
    where: {
      artistId: {
        [Op.in]: artistIds, // Sequelize "in" operator to match any of the given artistIds
      }
    }
  });

  return deletedArtists;  // Returns the number of deleted rows (affected rows)
};

// Logic to update an artist
const updateArtistLogic = async (id, updatedData) => {
  const artist = await Artist.findOne({ where: { artistId: id } });

  if (!artist) {
    return null;  // Return null if no artist is found
  }

  // Update artist details
  await artist.update(updatedData);
  return artist;  // Return updated artist
};

module.exports = { createArtistLogic, getArtistsLogic, deleteArtistsLogic, updateArtistLogic };
