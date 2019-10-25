var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! >>>>> This is test sample from aditya raj. Fifth test');
  res.send('Hello World! >>>>> This is test sample from aditya raj. sixth test');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

