const { Sequelize } = require('sequelize')

const dbSequelize = new Sequelize('projeto-app', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
})

//const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize
