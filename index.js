var express = require('express');
var app = express();
var favicon = require('server-favicon');

app.get('/', function (req,res) {
    res.send('Hello World!');
});
app.use(favicon(__dirname + '/public/favicon.ico'));
app.listen(80, function () {
    console.log("App is listen at port 3112" );
});