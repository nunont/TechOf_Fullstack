

var fs = require('fs');

fs.unlink('cars.txt', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('File deleted successfully!');
    }
});
