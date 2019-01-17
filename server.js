var express = require('express');
var app     = express();

app.set('view engine', 'ejs');

// require ("./js/constants.js")

app.get('/', function(req, res, next) {
    res.render('pages/index');
});


var server = app.listen(3000, '0.0.0.0', function () {
    console.log("app listening on http://%s:%s", server.address().address, server.address().port);
});