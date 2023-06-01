const { Sequelize, DataTypes } = require('sequelize')
const db = require('./db')

const Usuario = db.define(
  'Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(100),
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },
  {}
)

module.exports - Usuario
