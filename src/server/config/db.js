var mysql = require('mysql2');
const db = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'ZAQ!xsw2',
    database : 'ict_team',
    port : 3306
});

module.exports = db;