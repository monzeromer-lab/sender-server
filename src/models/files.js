const {
    DataTypes
} = require("sequelize");
const sequelize = require("../database/database");
const files = sequelize.define("files", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.INTEGER
    },
    path: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

files.sync({force: false});

module.exports = files;