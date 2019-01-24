const CONST_APP_PORT = process.env.CONST_APP_PORT;
const CONST_APP_HOST = process.env.CONST_APP_HOST;

var express = require('express');
var app     = express();

app.set('view engine', 'ejs');

// require ("./js/constants.js")

app.get('/', function(req, res) {
    res.render('pages/index');
});


// var server = app.listen(3000, '0.0.0.0', function () {
var server = app.listen(CONST_APP_PORT, CONST_APP_HOST, function () {
    console.log("app listening on http://%s:%s", server.address().address, server.address().port);
});