const Artist = require('../models/artist.model'); // Import the Artist model

// Logic to create an artist
const createArtistLogic = async (artistData) => {
    return await Artist.create(artistData);  // Pass the data to the model to create the artist
  };

// Logic to fetch all artists
const getArtistsLogic = async () => {
  return await Artist.findAll();  // Fetch all artists from the database
};

// Logic to delete an artist
const deleteArtistLogic = async (id) => {
  const artist = await Artist.destroy({ where: { artistId: id } });  // Delete artist by ID
  return artist;  // Returns number of affected rows (1 if deleted, 0 if not found)
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

module.exports = { createArtistLogic, getArtistsLogic, deleteArtistLogic, updateArtistLogic };
