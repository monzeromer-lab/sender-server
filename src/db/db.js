const sql = require('mysql');

const db = sql.createConnection({
    database: "sender",
    user: "root",
    host: "localhost",
    password: ""
});

module.exports = db;