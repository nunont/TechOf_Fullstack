

var fs = require('fs');


if (!fs.existsSync('Cenas')) {
    fs.mkdir('Cenas', function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Directory created successfully!');
            }
    });
}

fs.writeFileSync('./Cenas/brands.txt', 'goodbye world!')
