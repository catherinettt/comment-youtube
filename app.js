var fs = require('fs');


var express = require('express');

var routes = require('./routes.js');
var app = express();

app.use(app.router)
app.set('views', __dirname + '/views');
app.set('view engine', 'jade'); 
app.set('view options', { layout: false });
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + "/public"));
// app.use(app.router);
// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);

// app.configure('development', function(){
// 	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
// 	app.use(express.errorHandler());
// });

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
// Routes

app.get('/', routes.index);
app.get('/watch', routes.video)
app.get('/trending', routes.trending)



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
// app.get('/new', routes.neww);
// app.get('/projects', routes.projects);
// app.get('/about', routes.about);
// app.get('/calendar', routes.calendar);
// app.get('/tictactoe', routes.tictactoe);
// app.get('/projects/engage', routes.engage);
// exports.server = app;
// // listening
// app.listen(process.env.DEPLOY_PORT || 8080, function(){
// 	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
// });