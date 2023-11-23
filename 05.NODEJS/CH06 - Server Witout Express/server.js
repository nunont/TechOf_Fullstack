const fs = require('fs');
const http = require('http');
const path = require('path');


function readCarData(){
    var data = fs.readFileSync('./data/cars.json');
    return JSON.parse(data);
}

function createCarPage(template, data){
    var html = template;
    html = html.replace('%CARNAME%', data[0].name);
    html = html.replace('%CARID%', data[0].id);
    return html;
}

var serverFunction = function (req, res) {
    var reqPath = req.url;


    if (reqPath == '/') {
    }
    else if (reqPath == '/cars') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var data = readCarData();
        var template = fs.readFileSync('./templates/car.html', 'utf8');
        var html = createCarPage(template, data);
        res.end(html);
    }
    else if (reqPath = '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(readCarData()));
    }
};


var server = http.createServer(serverFunction);
server.listen(3000);