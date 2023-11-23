
const fs = require('fs');
const http = require('http');
const path = require('path');

const CSS_DIR = path.join(__dirname + "/../", 'public');
const JS_DIR = path.join(__dirname + "/../", 'public');

exports.handle = function (req, res) {

    let reqPath = req.url;
    console.log('Handle media');
    var ext = reqPath.match(/\.[a-zA-Z0-9]+$/g);
    var extStr = ext ? ext[0] : '';
    console.log('Extension: ' + extStr);


    console.log('Request for ' + reqPath + ' received.');

    if (extStr == ".css") {

        res.writeHead(200, { 'Content-Type': 'text/css' });
        var cssFile = loadCSSFile(reqPath);
        cssFile.pipe(res);
    }
    else if (extStr == ".js") {
        res.writeHead(200, { 'Content-Type': 'text/js' });
        /* res.end(loadJSFile(reqPath)); */
        loadJSFile(reqPath).pipe(res);
    }
    else {
        res.end();
    }

}

function loadJSFile(reqPath) {
    let filePath = path.join(JS_DIR, reqPath);
    let fileContent = fs.createReadStream(filePath, 'utf8');
    return fileContent;
}


function loadCSSFile(reqPath) {
    let filePath = path.join(CSS_DIR, reqPath);
    let fileContent = fs.createReadStream(filePath, 'utf8');
    return fileContent;
}

