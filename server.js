var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


// controller
var MainCtrl = require('./MainCtrl');


var port = 8080;
var app = express();

//middelware
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json()); 


//endpoints
app.post('/main', MainCtrl.create);
app.get('/main', MainCtrl.read);

//mongo
var mongoUri = 'mongodb://localhost:27017/animationtest';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to Mongo DB at ', mongoUri);
});

app.listen(port, function() {
	console.log('Listening to port ', port);
});
