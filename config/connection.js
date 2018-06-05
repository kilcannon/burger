var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: "Eerste00$$",
		database: "burgers_db"
	})
}
// var dbConfig = {
//     host: "localhost",
//     user: "root",
//     password: process.env.PASSWORD || "Eerste00$$",
//     database: "burgers_db"
// };

// var connection = mysql.createPool(process.env.DATABASE_URL || dbConfig);

module.exports = connection;
