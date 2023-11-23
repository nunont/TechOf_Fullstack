const http = require('http');
const fs = require('fs');
const path = require('path');

var isResponseToEnd = true;

var server_function = function (request, response) {
    isResponseToEnd = true;

    if (request.url === '/') {
        var content = fs.readFileSync('public/html/index.html', 'utf8');
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(content);
    }
    else if (request.url.match(/.css$/)) {
        isResponseToEnd = false;
        response.writeHead(200, { 'Content-Type': 'text/css' });
        var cssPath = path.join(__dirname, request.url);
        var cssStream = fs.createReadStream(cssPath, 'utf8');

        cssStream.pipe(response);
    }
    else if (request.url.match(/.js$/)) {
        isResponseToEnd = false;
        response.writeHead(200, { 'Content-Type': 'text/javascript' });
        var jsPath = path.join(__dirname, request.url);
        var jsStream = fs.createReadStream(jsPath, 'utf8');

        jsStream.pipe(response);
    }

    if (isResponseToEnd) {
        response.end();
    }

};

var server = http.createServer(server_function);
server.listen(3000);