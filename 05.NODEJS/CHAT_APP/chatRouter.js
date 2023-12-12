

const express = require('express');

var chatRouter = express.Router();

const mongoModule = require('./mongoModule');

chatRouter.get('/', async (req, res) => {
    let result = await mongoModule.getAllRooms();
    res.status(200).send(result);
});

module.exports = chatRouter;