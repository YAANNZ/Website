var path = require('path');
var express = require('express');
var routes = require('./routes');
var config = require('config-lite')(__dirname);
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

// app.listen(3000);
app.listen(config.port);


// var MongoClient = require('mongodb').MongoClient,
//   test = require('assert');

// var url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, function(err, db) {
//   // Use the admin database for the operation
//   var adminDb = db.admin();
//   // List all the available databases
//   adminDb.listDatabases(function(err, dbs) {
//     test.equal(null, err);
//     test.ok(dbs.databases.length > 0);
//     db.close();
//   });
// });

