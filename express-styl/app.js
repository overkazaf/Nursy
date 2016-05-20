var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var lists = require('./routes/lists');
var login = require('./routes/login');
var detail = require('./routes/detail');
var register = require('./routes/register');
var doctor = require('./routes/doctor');
var patient = require('./routes/patient');
var mongoose = require('mongoose');
var provider = require('./config/mongoose.js');
var deseaseType = require('./routes/deseaseType');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes);

/**
 * [返回疾病类型的接口]
 * @param  {[type]} req    [description]
 * @param  {[type]} res)   [description]
 * @return {[type]}        [description]
 */
app.use('/deseaseType', deseaseType);
app.use('/doctor', doctor);
app.use('/lists', lists);
app.use('/login', login);
app.use('/register', register);
app.use('/patient', patient);
app.use('/detail', detail);
app.use('/logout', function (req, res, next){
  // 销毁登陆状态
  res.render('login', {
      title : "登陆窗口"
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', function (){
  console.error.bind(console, 'connection error:')
  mongoose.disconnect();
});
db.once('open', function (callback) {
  var doctor = mongoose.model('Doctor');
});



module.exports = app;
