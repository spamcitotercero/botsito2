var http = require('http');

http.createServer(function (req, res) {
  res.write("Estoy vi vo");
  res.end();
}).listen(8080);
