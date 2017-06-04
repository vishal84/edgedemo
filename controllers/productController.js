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
		res.send(snapshot.val());
		console.log(snapshot.val());
	}, function (errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

// GET transaction /products/:productId
exports.getProduct = function(req, res) {

	var productId = req.params.productId;
	ref.orderByChild("id").on("value", function(snapshot) {

		snapshot.forEach(function(data) {
			if (data.val().id = productId) {
				console.log(data.val());
				res.send(data.val());
			}
		});
		/*
		if (snapshot.val().id = productId) {
			res.send(snapshot.val());
			console.log(snapshot.val());
		}*/
	}, function(errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

