const testDatabaseConfig = require("../../config/testDatabase");
const {
   Sequelize
} = require("sequelize");

const sequelize = new Sequelize(testDatabaseConfig.database, testDatabaseConfig.user, testDatabaseConfig.password, {
   host: testDatabaseConfig.host,
   dialect: testDatabaseConfig.type,
   logging: false,
   pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

module.exports = sequelize;