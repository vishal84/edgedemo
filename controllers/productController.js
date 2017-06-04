'use strict';

// Get Firebase object and service account key
const admin = require("firebase-admin");
const serviceAccount = require("../edgedemo-925ea.json");

// Initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edgedemo-925ea.firebaseio.com/"
});

// Get a reference to Firebase DB for products, orders, etc
const db = admin.database();
const ref = db.ref("edgedemo/products");

// GET transaction /products
exports.getAllProducts = function(req, res) {

	ref.on("value", function(snapshot) {
		res.json(snapshot.val());
		console.log(snapshot.val());
	}, function (errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

// GET transaction /products/:productId
exports.getProduct = function(req, res) {

	var productId = req.params.productId;
	ref.orderByValue().on("value", function(snapshot) {

		snapshot.forEach(function(data) {
    		console.log("The " + data.key + " dinosaur's score is " + data.val().id);
    		if (productId == data.val().id) {
    			console.log("found it");
    		}
  		});
		
	}, function(errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

