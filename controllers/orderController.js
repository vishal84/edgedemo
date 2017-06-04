'use strict';

// Get Firebase object and service account key
const admin = require("firebase-admin");
const serviceAccount = require("../edgedemo-925ea.json");

var models = require('../models/models.js');

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
	var found;

	ref.orderByValue().once("value", function(snapshot) {

		snapshot.forEach(function(data) {
    		if (orderId == data.val().id) {
    			ref.child(data.key).update(updatedOrder);
    			found = true;
    		}
  		});

		if (found == true) {
			console.log("Updated order " + orderId);
	  		res.json({ message: "Updated order " + orderId } );	
		} else {
			console.log("Could not find order: " + orderId);
	  		res.json({ message: "Could not find order " + orderId } );	
		}
		
	}, function(errorObject) {
		console.log("The update failed: " + errorObject.code);
		res.send(errorObject);
    });
};

// DELETE transaction /orders/:orderId
exports.cancelOrder = function(req, res) {

	var orderId = req.params.orderId;
	var found;

	ref.orderByValue().once("value", function(snapshot) {

		snapshot.forEach(function(data) {
    		if (orderId == data.val().id) {
    			ref.child(data.key).remove();
    			found = true;
    		}
  		});

		if (found == true) {
			console.log("Cancelled order " + orderId);
			res.send({ message: "Cancelled order " + orderId } );
		} else {
			console.log("Could not find order: " + orderId);
	  		res.json({ message: "Could not find order " + orderId } );	
		}

	}, function(errorObject) {
		res.send(errorObject);
		console.log("The update failed: " + errorObject.code);
	});
};

