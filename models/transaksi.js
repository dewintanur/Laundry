'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // tabel transaksi join ke tabel member
      this.belongsTo(models.members,{
        foreignKey: "id_member", as: "members"
      })
      // tabel transaksi join ke tabel user
      this.belongsTo(models.users,{
        foreignKey: "id_user", as: "user"
      })
      // tabel transaksi join ke tabel detail transaksi
      this.hasMany(models.detail_transakses,{
        foreignKey: "id_transaksi", as: "detail_transaksi"
      })
    }
  };
  transaksis.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_member: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    batas_waktu: DataTypes.DATE,
    tgl_bayar: DataTypes.DATE,
    status: DataTypes.INTEGER,
    dibayar: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaksis',
    tableName: 'transaksis'
  });
  return transaksis;
};