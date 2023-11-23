

var http = require('http');

var serverFunc = function(req, res) {
    
    let headers = {
        code : 200, 
        headers : {
            'Content-Type': 'text/html'
        }
    }

    let path = req.url;
    
    let result = '';

    if (path === '/') {
        result = '<h1>Home Page</h1>';
    }
    else if (path === '/car') {
        result = '<h1>Car Page</h1>';
    }
    else if (path === '/bike') {
        result = '<h1>Bike Page</h1>';
    }
    else {
        headers.code = 404;
        result = '<h1>Page Not Found</h1>';
    }

    res.writeHead(headers.code, headers.headers);
    res.write(result)

    res.end();
}

var server = http.createServer(serverFunc);
server.listen(3001);
