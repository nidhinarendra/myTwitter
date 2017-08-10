var express = require('express');
var mainController = require('./controllers/mainCntrlNode');
//to fire the express function
var app = express();

//setup template engine
app.set('view engine', 'ejs');


//fire controllers
mainController(app);
