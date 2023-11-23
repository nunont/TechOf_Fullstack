
const http = require('http');
const url = require('url');

const fileModule = require('./fileModule');
const path = require('path');

let csvPath = path.join(__dirname, 'data.csv');


let server_function = function (request, response) {
    const baseUrl = 'http://' + request.headers.host + '/';
    let reqURL = new URL(request.url, baseUrl); 
    let reqPath = reqURL.pathname;
    
    let resHeaders = {
        code : 200,
        headers: {
            'Content-Type': 'text/html'
        }
    };

    let data = '';

    // '/'
    if (reqPath == '/') {
        data = '<h1>Hello World!</h1>';
    }
    // 'heroes'
    else if (reqPath == '/heroes') {
        data = getHeroes();
    }
    // 'heroes/{id}'
    response.writeHead(resHeaders.code, resHeaders.headers);
    response.write(data);
    response.end();
};

let server = http.createServer(server_function);
server.listen(3000);

function getHeroes(){
    var cvsData = fileModule.readFileAsCSV(csvPath);

    var html = '<table>';
    for (let line of cvsData) {
        html += '<tr>';

        for (let column of line) {
            html += '<td>' + column + '</td>';
        }

        html += '</tr>';

    }
    html += '</table>';

    return html;
}
