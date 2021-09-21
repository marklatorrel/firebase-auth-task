var express = require('express');

var app = express();

app.use(express.static("public"));


app.get('/hello', function (req, res) {

    console.log("Hello World");

    res.send("Hello World")

});


var port = 3000;

app.listen(port, function () {

    console.log('Listening on port:' + port);

});