
const express = require('express')
const mongoose = require('mongoose') 

var app = express();
app.use(express.json());

const connectingString =  "mongodb+srv://nunomarques:JhhwOvTNH2oHwvI1@techof.l1ey8sn.mongodb.net/Base?retryWrites=true&w=majority";
mongoose.connect(connectingString, {useNewUrlParser: true, useUnifiedTopology: true})

const PORT = 3000;




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

