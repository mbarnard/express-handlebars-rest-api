/**
 * # server.js
 * Express server to get the New York Times
 * Top 20 Best Selling Hardback Fiction list
 * Load express, superagent ajax api,
 * Handlebars and consolidate for html templating
*/

var express = require('express');
var superagent = require('superagent');
var consolidate = require('consolidate');

// Create app express variable
var app = express();

// Configure template engine
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Set path to serve static content from /public folder
app.use(express.static(__dirname + '/public'));

// Use auth key
var keys = require('./keys/credentials');
var api_key = keys.nyt_books;

// Get json and provide queries
// Pass api_key and set header
// Render response if no errors
app.get('/', function(req, res, next) {
  superagent.get('https://api.nytimes.com/svc/books/v3/lists.json')
  .query({
    'list': 'hardcover-fiction',
    'sort-order': 'ASC'
  })
  .set({ 'api_key': api_key, Accept: 'application/json' })
  .end(function(err, response) {
    if (err) {
      next(err);
    }
    return res.render('index', response.body);
  })
});

// Error middleware for 404
app.use(function(err, req, res, next) {
  console.error(err);
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(404);
  res.send('Error 404');
});

// Create server on port 3000
app.listen(3000);
console.log('Express started on port 3000');
