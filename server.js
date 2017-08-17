let http = require('http');
let data = require('database.js');

let server = http.createServer(function(req, res) {
    res.end("Hello world");
});

server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");