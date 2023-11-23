
var fs = require('fs');

var path = './';
var fileName = 'test.txt';
var fullPath = path + fileName;

fs.writeFile(fullPath, 'Bananas\n', function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('The file was saved!');
});

var data = fs.readFileSync(fullPath, 'utf8');
console.log('Data: ' + data);
