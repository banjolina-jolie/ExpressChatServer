
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  room = require('./routes/room'),
  http = require('http'),
  path = require('path'),
  app = express(),
  url = require('url'),
  qs = require('querystring');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.getHandler);
app.post('/', routes.postHandler);
app.get('/:rmnm', room.getHandler);
app.post('/:rmnm', room.postHandler);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
