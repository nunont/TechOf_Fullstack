
var fs = require('fs');

let folderPath = './Cars copy';

let folderExists = fs.existsSync(folderPath);

if (folderExists) {
    var files = fs.readdirSync(folderPath);
    
    files.forEach(f => {
        fs.unlinkSync(folderPath + '/' + f);
    });

    fs.rmdirSync(folderPath);
}