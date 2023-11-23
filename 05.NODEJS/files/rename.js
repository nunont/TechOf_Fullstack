

var fs = require('fs');

//fs.renameSync('cars.txt', 'brands.txt')

fs.rename('brands.txt', 'cars.txt', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('File renamed successfully!');
    }
});