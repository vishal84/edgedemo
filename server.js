// Create an app using express for REST APIs
const express = require('express');
const bodyParser = require('body-parser');

// Get Firebase object and service account key
const admin = require("firebase-admin");
const serviceAccount = require("./edgedemo-925ea.json");

// init app settings
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes.js');
routes(app);

// start app
app.listen(port, function() {
  console.log('Edge Demo REST API listening on port: ' + port);
})

