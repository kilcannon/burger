var mysql = require("mysql");

var dbConfig = {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD || "Eerste00$$",
    database: "burgers_db"
};

var connection = mysql.createPool(process.env.DATABASE_URL || dbConfig);

module.exports = connection;
