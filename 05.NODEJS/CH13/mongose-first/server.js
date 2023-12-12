var express = require('express');
var app = express();

var mongoose = require('mongoose');

var Pokemon = require('./pokemonModel');

 
var OPT = {
    useNewUrlParser: true
};

var port = 3000;

const connection =  "mongodb+srv://nunomarques:JhhwOvTNH2oHwvI1@techof.l1ey8sn.mongodb.net/Fullstack?retryWrites=true&w=majority";

app.post('/pokemon', function(req, res) {
    var pokemon = new Pokemon(req.body);
    
    pokemon.save()
    .then((pokemon) => {
        res.status(201).send(pokemon);
    })
    .catch((err) => {
        res.status(400).send(err);
    });

});

app.get('/pokemon', function(req, res) {
    let queryObj = { ...req.query };

    let withOutFields = ['sort', 'limit', 'page', 'fields'];
    withOutFields.forEach((el) => delete queryObj[el]);


    console.log(queryObj);

    var limit = parseInt(req.query.limit) || 10;
    var page = parseInt(req.query.page) || 1;
    var skip = (page - 1) * limit;
    
    //ADD PAGINATION
    Pokemon.find(queryObj).limit(limit).skip(skip).then((pokemons) => {
        res.status(200).send(pokemons);
    });

    /* Pokemon.find(queryObj).then((pokemons) => {
        res.status(200).send(pokemons);
    }); */

    
});

mongoose.connect(connection, OPT);

app.listen(port);