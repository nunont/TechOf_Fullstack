

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const chatRouter = require('./chatRouter');
app.use('/api/rooms', chatRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});