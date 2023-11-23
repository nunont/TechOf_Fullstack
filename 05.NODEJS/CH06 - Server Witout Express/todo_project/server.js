
const http = require('http');
const url = require('url');

const htmlRequestHandler = require('./modules/html_request_module.js');
const mediaRequestHandler = require('./modules/media_request_module.js');
const apiRequestHandler = require('./modules/api_request_module.js');

function requestHandler(req, res) {
    console.log('============= REQUEST =============');
    let baseUrl = 'http://' + req.headers.host + '/';
    let reqUrl = new URL(req.url, baseUrl);
    let routeRaw = reqUrl.pathname;
    let routes = routeRaw.split('/').filter(x => x);

    console.log('Base URL: ' + baseUrl);
    console.log('Request URL: ' + reqUrl);
    console.log('Request for ' + routeRaw + ' received.');
    console.log('Routes: ' + routes);
    
    if (routeRaw.startsWith('/api')) {
        console.log('API request received.');
        apiRequestHandler.handle(req, res);
    }
    else if (routeRaw.match(/\.[a-zA-Z0-9]+$/)) {
        console.log('Media request received.');
        mediaRequestHandler.handle(req, res);
    }
    else {
        console.log('HTML request received.');
        htmlRequestHandler.html_request_handle(req, res);
    }
}

let server_function = function (req, res) {

    requestHandler(req, res);


};

var server = http.createServer(server_function);
server.listen(3000);