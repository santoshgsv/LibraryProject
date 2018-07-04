var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var index = require('./index');
var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;


app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);


router.use(function (req, res, next) {
  
    console.log('Logging of request will be done here');
    next(); 
});
