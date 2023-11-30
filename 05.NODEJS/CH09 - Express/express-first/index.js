
const express = require('express');
var bodyParser = require('body-parser')


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

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());


let homeRequest = (req, res) => {
    res.status(200);
    res.send('Hello World!');
}

let apiRequest = (req, res) => {
    res.send('Hello API!');
}

let getStudents = (req, res) => {
    res.send(students);
}


let getStudentById = (req, res) => {
    var studentId = req.params.id;

    var student = students.find(student => student.id == studentId);
    res.json(student);
};

let getStudentByIdAndName = (req, res) => {
    var studentId = req.params.id;
    var studentName = req.params.name;

    var student = students.find(student => student.id == studentId && student.name == studentName);
    res.json(student);
}

let postAPI = (req, res) => {
    let body = req.body;
    res.send(body);
}

app.get('/', homeRequest);
app.get('/api', apiRequest);

app.get('/api/students', getStudents);
app.get('/api/students/:id', getStudentById)
app.get('/api/students/:id/:name', getStudentByIdAndName);

app.post('/api', postAPI);

app.listen(port)