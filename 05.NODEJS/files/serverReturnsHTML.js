

const fs = require('fs');
const http = require('http');
const path = require('path');

var server_function = function(req, res) {

    var filePath = path.join(__dirname, 'index.html');

    var headers = {
        'Content-Type': 'text/html'
    };

    fs.readFile(filePath, function(err, content) {
        if(err) {
            res.writeHead(500, headers);
            res.end(err);
        } else {
            res.writeHead(200, headers);
            res.end(content);
        }
    });

};

var server = http.createServer(server_function);

server.listen(3000);