const static = require('node-static');

const file = new static.Server('./public');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 8080);