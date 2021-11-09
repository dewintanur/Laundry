'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pakets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pakets.init({
    id_paket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    jenis_paket: DataTypes.STRING,
    harga: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'pakets',
    tabelName: 'pakets'

  });
  return pakets;
};