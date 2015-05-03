var restify = require('restify');
var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'sampleApp',
  streams: [
    {
      level: 'info',
      path: './log/applog.log'
    }
  ]
});

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
  log.info('%s listening at %s, server.name, server.url');
}); 
