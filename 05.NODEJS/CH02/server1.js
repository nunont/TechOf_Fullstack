var http = require('http');

var serverFunc = function(request, response) {
    response.write('Hello World!');
    response.end();
}

var server = http.createServer(serverFunc);
server.listen(3000);
