

var http = require('http');

var serverFunc = function(req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});

    let path = req.url;

    if (path === '/firstname') {
        res.write('Miki');
    }
    else if (path === '/lastname') {
        res.write('Mimi');
    }
    else {
        res.write('I dont know how to respond to that');
    }

    res.end();
}

var server = http.createServer(serverFunc);
server.listen(3001);
