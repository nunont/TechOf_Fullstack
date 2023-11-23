
const fs = require('fs');
const path = require('path');


exports.writeToFile = function(path, content) {   
    fs.writeFileSync(path, content);
}

exports.addToFile = function(path, content) {
    content = '\n' + content;
    fs.appendFileSync(path, content);
}

exports.readFile = function(path) {
    return fs.readFileSync(path, 'utf8');
}
let readFile = exports.readFile;

exports.readFileLines = function (path) {
    var data = readFile(path);
    return data.split('\n');
}
let readFileLines = exports.readFileLines;

exports.readFileAsCSV = function(path, divider = ',') {
    const lines = readFileLines(path);
    let result = [];

    for (let line of lines) {
        let columns = line.split(divider);
        result.push(columns);
    }

    return result;
}


