const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const userController = require('./user');

const app = express(); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    userController.findUsers(res);
});

app.post('/users', (req, res) => {
    userController.addUsers(req.body, res);
});

app.listen(PORT, () => {
    console.log('Listening on port 8080');
});