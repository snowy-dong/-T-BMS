var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
var permiss = require('./routes/permiss');
var role = require('./routes/role');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 拦截器
app.all('/*', function (req, res, next) {
  console.log(req.headers.authorization)
  next();
// if (req.url == '/login') {
//     next();
// } else {
//     if (req.method == "GET") {
//         username = req.query.user;
//     } else if (req.method == "POST") {
//         username = req.body.user;
//     }
//     if (sessionPool[username] && getSid(res.req.headers.cookie) == sessionPool[username]) {
//         // 用户session存在
//         next();
//     } else {
//         res.json({ requestIntercept: 1 });  // 页面拿到这个值在做拦截处理即可
//     }
// }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login',auth)
app.use('/users', users);
app.use('/permiss', permiss);
app.use('/role', role);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
