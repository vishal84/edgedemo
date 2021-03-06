// Create an app using express for REST APIs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// init app settings
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

var routes = require('./routes/routes.js');
routes(app);

// start app
app.listen(port, function() {
  console.log('Edge Demo REST API listening on port: ' + port);
})

