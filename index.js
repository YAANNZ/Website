var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000);