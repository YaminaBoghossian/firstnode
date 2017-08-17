// le fs va contenir tous les truc de manip de fichiers ex mkdir 
let fs = require('fs');
let doggo = require('database.js');
let ser = require('server.js');

// ou nouvelle maniere de le faire avec import 
//import fs from 'fs';
fs.readFile('/home/boghossian/devv/ajaxtchat/README.md, utf-8',
    function(error, data) {
        console.log(data);
    });

console.log('fs');
console.log('bloup')