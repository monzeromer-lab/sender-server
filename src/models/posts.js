const sequelize = require("../database/database"),
    {
        DataTypes
    } = require("sequelize"),
    files = require("./files"),
    users = require("./users");

const posts = sequelize.define("posts", {
    id: {
        type: DataTypes.UUID,
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
    file_id: {
        type: DataTypes.UUID,
        references: {
            model: "files",
            key: "id"
        },
        allowNull: true
    },
    body: {
        type: DataTypes.CHAR,
        allowNull: true
    }
}, {
    freezeTableName: true
});

posts.sync({
    force: false
});

posts.belongsToMany(users);
posts.belongsToMany(files);

module.exports = files;