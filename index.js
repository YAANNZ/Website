var path = require('path');
var express = require('express');
var app = express();

var homeRouter = require('./routes/home');
var userRouter = require('./routes/user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/user', userRouter);

app.listen(3000);