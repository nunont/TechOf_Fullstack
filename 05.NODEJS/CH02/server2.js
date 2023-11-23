

var http = require('http');

var serverFunc = function(request, response) {
    response.write('Nuno Marques');
    response.end();
}

var server = http.createServer(serverFunc);
server.listen(3001);
