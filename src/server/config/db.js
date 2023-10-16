var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "sticky_lemon",
  port: 3306,
});

module.exports = db;
