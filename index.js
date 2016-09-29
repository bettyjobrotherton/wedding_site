var express = require('express');
var server = express();

server.use(express.static(__dirname + "/public"));

server.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: __dirname});
});

server.get('bparty.html', function(request, response) {
  response.sendFile('public/bparty.html', {root: __dirname});
});

server.get('bride.html', function(request, response) {
  response.sendFile('public/bride.html', {root: __dirname});
});

server.get('groom.html', function(request, response) {
  response.sendFile('public/groom.html', {root: __dirname});
});

server.get('macbk.html', function(request, response) {
  response.sendFile('public/macbk.html', {root: __dirname});
});

server.get('met.html', function(request, response) {
  response.sendFile('public/met.html', {root: __dirname});
});

server.get('wedding.html', function(request, response) {
  response.sendFile('public/wedding.html', {root: __dirname});
});

server.listen(8080, function() {
  console.log('Now listening on port...', 8080);
});
