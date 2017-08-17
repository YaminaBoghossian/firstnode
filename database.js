var mysql = require('mysql');
let ser = require('server.js');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'simplon',
    database: 'firstdb',
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM lildoggo", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});