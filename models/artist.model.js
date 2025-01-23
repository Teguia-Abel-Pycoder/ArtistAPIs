const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');  //  
const Artist = sequelize.define('Artist', {
  artistId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  
  artistName: {
    type: DataTypes.STRING,
    
    allowNull: false
  },
  artistImage: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  stageName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numberOfAlbums: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  artistRating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  recordLabel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishingHouse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  careerStartDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
module.exports = Artist;
