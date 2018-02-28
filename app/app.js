//read Library

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// config body-parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;//config port number

//GET http://localhost:3000/api/v1/

var router = require('./routes/v1');
app.use('/api/v1/', router);

//generate server

app.listen(port);
console.log('listen on port ' + port);