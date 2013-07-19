var express = require('express');

var app = express.createServer(express.logger());

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var indexContent = index.toString();

app.get('/', function(request, response) {
  response.send(indexContent);
});





var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
