const express = require('express')

const fs = require('fs')
const bodyParser = require("body-parser");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/classes', (req, res) => {
    res.json(readDB('classes'))
})

app.use(bodyParser.json());


app.get('/classes/:id', (req, res) => {
    let id = req.params.id;
    let data = readDB('classes')
    let result = data.filter(obj => { return obj.id == id })
    res.json(result)
})

app.post('/classes', (req, res) => {
    let data = readDB('classes')
    
    let newClass = {
        id: data.length + 1,
        Year: req.body.name,
        Name: req.body.teacher
    }
    data.push(newClass)
    fs.writeFileSync('DB/classes.json', JSON.stringify(data))
    res.json(newClass)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


readDB = (name) => {
    let data = fs.readFileSync('DB/' + name + '.json', 'utf8')
    return JSON.parse(data)
 }
