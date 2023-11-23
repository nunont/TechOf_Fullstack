
const express = require('express');
var bodyParser = require('body-parser')


var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.send('Hello API!');
});


let students = [
    {
        id: 1,
        name: 'John Doe',
        age: 23
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 24
    }
];

app.get('/api/students', (req, res) => {
    

    res.send(students);
});

app.get('/api/students/:id', (req, res) => {
    var studentId = req.params.id;

    var student = students.find(student => student.id == studentId);
    res.json(student);
});

app.get('/api/students/:id/:name', (req, res) => {
    var studentId = req.params.id;
    var studentName = req.params.name;

    var student = students.find(student => student.id == studentId && student.name == studentName);
    res.json(student);
});

app.post('/api', (req, res) => {
    let body = req.body;
    res.send(body);
});

app.listen(port)