// Create an app using express for REST APIs
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('/routes/routes');
routes(app);

// start app
app.listen(port, function() {
  console.log('Edge Demo REST API listening on port: ' + port);
})

