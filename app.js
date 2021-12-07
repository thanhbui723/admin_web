const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var Database = require('./DB/database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const billRouter = require('./routes/bill');
const userRouter = require('./routes/user');
const inboxRouter = require('./routes/inbox');
const profileRouter = require('./routes/profile');
const info_productRouter = require('./routes/info_product');
const add_productRouter = require('./routes/add_product');
const add_accountRouter = require('./routes/add_account');
const loginRouter = require('./routes/login');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/bill', billRouter);
app.use('/inbox', inboxRouter);
app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/info_product', info_productRouter);
app.use('/add_product', add_productRouter);
app.use('/add_account', add_accountRouter);
app.use('/login', loginRouter);

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
