
var fs = require('fs');

fs.rmdir('Cars', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Directory deleted successfully!');
    }
});