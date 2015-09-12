var express = require('express');
var app = express();
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/favicon.ico'))

app.get('/', function (req, res) {
    res.send('Hello world')
});

app.get('/yo', function (req, res) {
    res.send('YO!')
});

var server = app.listen(80, function () {
    console.log('Server running at http://localhost:' + server.address().port)
});