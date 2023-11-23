const http = require('http');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const HTML_DIR = path.join(PUBLIC_DIR, 'html');
const CSS_DIR = path.join(PUBLIC_DIR, 'css');
const JS_DIR = path.join(PUBLIC_DIR, 'js');
const IMG_DIR = path.join(PUBLIC_DIR, 'images');

var isResponseToEnd = true;

let server_function = function(req, res) {
    let reqPath = req.url;

    let headers = {
        code : 200,
        type : {'Content-Type': 'text/html'}
    }

    let resData = '';

    if (reqPath === '/') {
        var content = fs.readFileSync(path.join(HTML_DIR, 'index.html'), 'utf8');
        resData = content;
        headers.type = {'Content-Type': 'text/html'};
    }

    res.writeHead(headers.code, headers.type);
    res.write(resData);

    if (isResponseToEnd) {
        res.end();
    }

};