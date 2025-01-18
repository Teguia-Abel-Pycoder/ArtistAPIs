const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Adjust the path as necessary
const Artist = require('./artist.model');  // Import the Artist model to establish the relationship

// Define the SocialMediaLink 
const SocialMediaLink = sequelize.define('SocialMediaLink', {
  platform: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Establish the  between  and SocialMediaLink
Artist.hasMany(SocialMediaLink, {
  foreignKey: 'artistId',
  onDelete: 'CASCADE',  // Delete social media links when the artist is deleted
});

SocialMediaLink.belongsTo(Artist, {
  foreignKey: 'artistId',
});

module.exports = SocialMediaLink;
