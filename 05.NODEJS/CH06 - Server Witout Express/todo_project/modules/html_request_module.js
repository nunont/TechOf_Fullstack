const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join( __dirname + "/../", 'public', 'html');

exports.html_request_handle = function (req, res) {

    let reqPath = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(loadHTMLFile(reqPath));
    res.end();
}


function loadHTMLFile(reqPath) {
    if (reqPath == '/') {
        reqPath = '/index';
    }
    let filePath = path.join(HTML_DIR, reqPath + ".html");
    let fileContent = fs.readFileSync(filePath, 'utf8');
    return fileContent;
}

