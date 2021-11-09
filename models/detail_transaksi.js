'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transakses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // menghubungkan tabel detail ke tabel paket
      this.belongsTo(models.pakets,{
        foreignKey:"id_paket", as :"paket"
      })

        }
  };
  detail_transakses.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_paket: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
   qty: DataTypes.DOUBLE},
   {
    sequelize,
    modelName: 'detail_transakses',
    tabelName: 'detail_transakses'

  });
  return detail_transakses;
};