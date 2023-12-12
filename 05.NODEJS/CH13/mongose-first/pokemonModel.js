

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        unique: true
    },
    type: {
        type: String,
        required: [true, 'Type field is required']
    },
    level: Number,
    catchDate : Date
});

module.exports = mongoose.model('Pokemon', PokemonSchema);