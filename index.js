var path = require('path');
var express = require('express');
var routes = require('./routes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.listen(3000);


var MongoClient = require('mongodb').MongoClient,
  test = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
  // Use the admin database for the operation
  var adminDb = db.admin();
  // List all the available databases
  adminDb.listDatabases(function(err, dbs) {
    test.equal(null, err);
    test.ok(dbs.databases.length > 0);
    db.close();
  });
});

// var MongoClient = require('mongodb').MongoClient,
//   test = require('assert');
// // Connection url
// var url = 'mongodb://localhost:27017/test';
// // Connect using MongoClient
// MongoClient.connect(url, function(err, db) {
//   // Create a collection we want to drop later
//   var col = db.collection('createIndexExample1');
//   // Insert a bunch of documents
//   col.insert([{a:1, b:1}
//     , {a:2, b:2}, {a:3, b:3}
//     , {a:4, b:4}], {w:1}, function(err, result) {
//     test.equal(null, err);
//     // Show that duplicate records got dropped
//     col.aggregation({}, {cursor: {}}).toArray(function(err, items) {
//       test.equal(null, err);
//       test.equal(4, items.length);
//       db.close();
//     });
//   });
// });