const sql = require('mysql');
const config = require("../../config/config").database;

const db = sql.createConnection(config);

module.exports = db;