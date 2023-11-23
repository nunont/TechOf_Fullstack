

var http = require('http');

var serverFunc = function(request, response) {
    response.write(request.url);
    response.end();
}

var server = http.createServer(serverFunc);
server.listen(3001);
