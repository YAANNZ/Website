var path = require('path');
var express = require('express');
var routes = require('./routes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

routes(app);
// app.use('/home', require('./routes/home'));
// app.use('/user', require('./routes/user'));

app.listen(3000);