'use strict';

// Get Firebase object and service account key
const admin = require("firebase-admin");
const serviceAccount = require("../edgedemo-925ea.json");

/*// Initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edgedemo-925ea.firebaseio.com/"
});*/

// Get a reference to Firebase DB for products, orders, etc
const db = admin.database();
const ref = db.ref("edgedemo/orders");

// GET transaction /orders
exports.getAllOrders = function(req, res) {

	ref.on("value", function(snapshot) {
		res.json(snapshot.val());
		console.log(snapshot.val());
	}, function (errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

// POST transaction /orders
exports.placeOrder = function(req, res) {

	var order = req.body;
	var newOrder = ref.push();
	newOrder.set(order, function(error) {
		if (error) {
			res.json(error);
			console.log("The read failed: " + error);
		} else {
			res.json(newOrder.key);
			console.log("New order placed: " + newOrder.key);
		}
	});
	
};

// GET transaction /orders/:orderId
exports.getOrder = function(req, res) {

	var orderId = req.params.orderId;
	ref.orderByValue().on("value", function(snapshot) {

		snapshot.forEach(function(data) {
    		if (orderId == data.val().id) {
    			res.json(data.val());
    			console.log(data.val());
    		}
  		});
		
	}, function(errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

// PUT transaction /orders/:orderId
exports.updateOrder = function(req, res) {

	var orderId = req.params.orderId;
	var updatedOrder = req.body;
	var key;

	ref.orderByValue().once("value", function(snapshot) {

		snapshot.forEach(function(data) {
    		if (orderId == data.val().id) {
    			key = data.key;
    			ref.child(data.key).update(updatedOrder);
    		}
  		});

  		console.log("Updated order " + orderId);
  		res.send();
		
	}, function(errorObject) {
		console.log("The update failed: " + errorObject.code);
		res.send(errorObject);
    });
};

// DELETE transaction /orders/:orderId
exports.cancelOrder = function(req, res) {

	var orderId = req.params.orderId;
	ref.orderByValue().once("value", function(snapshot) {

		snapshot.forEach(function(data) {
    		if (orderId == data.val().id) {
    			ref.child(data.key).removeValue();
    			res.json(orderId);
    			console.log("Cancelled order " + orderId);
    		}
  		});
		
	}, function(errorObject) {
		res.send(errorObject);
		console.log("The update failed: " + errorObject.code);
	});
};

