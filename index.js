var path = require('path');
var express = require('express');
var routes = require('./routes');
var config = require('config-lite')(__dirname);
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.listen(config.port);


