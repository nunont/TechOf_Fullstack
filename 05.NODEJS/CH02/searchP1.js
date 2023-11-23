

const { log } = require('console');
var http = require('http');
var url = require('url');

var serverFunc = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //get protocol from request
    let baseURL = 'http://' + req.headers.host + '/';
    console.log(baseURL);

    let reqUrl = new URL(req.url, baseURL);
    let queryParam = reqUrl.searchParams;
    console.log(queryParam);

    var brand = queryParam.get('brand');
    console.log(brand);

    var hasBrand = queryParam.has('brand');
    console.log(hasBrand);

    var parmTest = getParam(reqUrl.searchParams, 'test');
    console.log(parmTest);

    res.end();
}


var server = http.createServer(serverFunc);
server.listen(3001);


function getParam( searchParams, paramName) {
    if (searchParams.has(paramName)) {
        return searchParams.get(paramName);
    }
    else {
        return 'Not Found';
    }
} 