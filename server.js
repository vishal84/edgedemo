// Create an app using express for REST APIs
const express = require('express');
const bodyParser = require('body-parser');

// init app settings
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes.js');
routes(app);

// start app
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.listen(port, function() {
  console.log('Edge Demo REST API listening on port: ' + port);
})

