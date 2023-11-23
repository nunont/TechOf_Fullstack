
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname,'../' ,'db.json');

exports.handle = function (req, res) {

    let reqPath = req.url;

    if (reqPath == '/api/todos') {
        console.log('API request received.');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(loadDBFile());
    }
}

function loadDBFile() {
    let fileContent = fs.readFileSync(DB_FILE, 'utf8');
    return fileContent;
}