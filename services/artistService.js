const Artist = require('../models/artist.model');
const { Op } = require('sequelize');

// Create an artist
const createArtistLogic = async (artistData) => {
  try {
    return await Artist.create(artistData);
  } catch (error) {
    throw new Error('Error creating artist: ' + error.message);
  }
};


const getArtistsLogic = async () => {
  try {
    return await Artist.findAll();
  } catch (error) {
    throw new Error('Error fetching artists: ' + error.message);
  }
};

// Delete 
const deleteArtistsLogic = async (ids) => {
  try {
    const artistIds = ids.split(',').map(id => parseInt(id));
    const deletedArtists = await Artist.destroy({
      where: {
        artistId: {
          [Op.in]: artistIds
        }
      }
    });
    return deletedArtists;
  } catch (error) {
    throw new Error('Error deleting artists: ' + error.message);
  }
};

// Update 
const updateArtistLogic = async (id, updatedData) => {
  try {
    const artist = await Artist.findOne({ where: { artistId: id } });
    if (!artist) return null;

    await artist.update(updatedData);
    return artist;
  } catch (error) {
    throw new Error('Error updating artist: ' + error.message);
  }
};

// Get artist 
const getArtistDetailsLogic = async (id) => {
  try {
    return await Artist.findOne({ where: { artistId: id } });
  } catch (error) {
    throw new Error('Error fetching artist details: ' + error.message);
  }
};

module.exports = { createArtistLogic, getArtistsLogic, deleteArtistsLogic, updateArtistLogic, getArtistDetailsLogic };
