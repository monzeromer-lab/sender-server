const sequelize = require("../database/database"),
    users = require("./users"),
    {
        DataTypes
    } = require("sequelize");

const users_followers = sequelize.define("users_followers", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: "users",
            key: "id"
        }
    },
    follower_id: {
        type: DataTypes.UUID,
        references: {
            model: "users",
            key: "id"
        }
    }
});

users_followers.sync({
    force: false
});

users_followers.belongsToMany(users);

module.exports = users_followers;