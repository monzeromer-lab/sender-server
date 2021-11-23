const {
    DataTypes
} = require("sequelize"),
    sequelize = require("../database/database"),
    users = require("./users"),
    posts = require("./posts");

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
    },
    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    user_id: {
        type: DataTypes.STRING,
        references: {
            model: "users",
            key: "id"
        }
    }
}, {
    freezeTableName: true
});

files.sync({
    force: false
});

files.belongsToMany(users , {through: files});
files.hasMany(posts, {through: files});

module.exports = files;