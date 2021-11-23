const sequelize = require("../database/database"),
    {
        DataTypes
    } = require("sequelize"),
    files = require("./files"),
    posts = require("./posts");

const users = sequelize.define("users", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT({
            length: "tiny"
        }),
        allowNull: true
    },
    profile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
}, {
    freezeTableName: true
});

// unable drop table if exists before creating the table 
users.sync({
    force: false
});

// setup the releationship between the users and the posts & files
users.hasMany(posts);
users.hasMany(files);

module.exports = users;