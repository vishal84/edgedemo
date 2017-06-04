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
const ordersRef = db.ref("edgedemo/orders");

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
    		if (productId == data.val().id) {
    			res.json(data.val());
    			console.log(data.val());
    		}
  		});
		
	}, function(errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

