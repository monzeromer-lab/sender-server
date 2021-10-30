// database for testing
const DatabaseConfig = require("../../config/testDatabase");

// production database
// const DatabaseConfig = require("../../config/database");

const {
   Sequelize
} = require("sequelize");

const sequelize = new Sequelize(DatabaseConfig.database, DatabaseConfig.user, DatabaseConfig.password, {
   host: DatabaseConfig.host,
   dialect: DatabaseConfig.type,
   logging: false,
   pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

module.exports = sequelize;