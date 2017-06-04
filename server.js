// Create an app using express for REST APIs
const express = require('express');
const app = express();
const port = 3000;

// start app
app.listen(port, function() {
  console.log('Edge Demo REST API listening on port: ' + port);
})

