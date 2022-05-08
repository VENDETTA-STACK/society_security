var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var memberRouter = require('./routes/member');
var watchmanRouter = require('./routes/watchman');
var masterAdminRouter = require('./routes/masterAdmin');
var adsVendorRouter = require('./routes/adsVendor');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ 
  extended: true,
  limit: '50mb'
 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/member', memberRouter);
app.use('/watchman', watchmanRouter);
app.use('/masterAdmin', masterAdminRouter);
app.use('/adsVendor', adsVendorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
