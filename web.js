var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/public'));
//app.listen(8080);
app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html", 'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
