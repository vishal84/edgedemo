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

app.get('/products', function(req, res) {
	var ref = db.ref("edgedemo/products");

	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
	  res.send(snapshot.val());
	  console.log(snapshot.val());
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
})

app.get('/products/:id', function(req, res) {
	var ref = db.ref("edgedemo/products");

	var id = req.params.id;
	ref.on("value", function(snapshot) {
		var products = snapshot.val();

	  	for (var product in products) {
			console.log(product.id);
			if (product.id = id) {
				var theProduct = JSON.stringify(product);
				res.setHeader("Content-Type", "application/json");
				res.write(theProduct);
			}
		}
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
})



// start app
app.listen(port, function() {
  console.log('listening on 3000')
})

