var express = require('express');
var app = express();
var meetupsController = require('./server/controllers/meetups-controller.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3000, function() {
    console.log('I\'m Listening...');
});


