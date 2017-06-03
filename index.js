const admin = require("firebase-admin");
const serviceAccount = require("./edgedemo-925ea.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edgedemo-925ea.firebaseio.com/"
});

// Get a reference to Firebase DB for products, orders, etc
const db = admin.database();
const ref = db.ref("edgedemo");

const productRef = ref.child("products");

// Create an app using express for REST APIs
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('REST API endpoint');
})

// start app
app.listen(port, function() {
  console.log('listening on 3000')
})

