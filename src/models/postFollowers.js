const sequelize = require("../database/database"),
    users = require("./users"),
    posts = require("./posts");

const posts_followers = sequelize.define("posts_followers", {
    post_id: {
        type: DataTypes.UUID,
        references: {
            model: "posts",
            key: "id"
        }
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: "users",
            key: "id"
        }
    }
});

posts_followers.sync({
    force: false
});

posts_followers.belongsToMany(users);
posts_followers.belongsToMany(posts);

module.exports = posts_followers;