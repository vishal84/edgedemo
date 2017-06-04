'use strict';

// Get Firebase object and service account key
const admin = require("firebase-admin");
const serviceAccount = require("../edgedemo-925ea.json");

var models = require('../models/models.js');

// Get a reference to Firebase DB for products, orders, etc
const db = admin.database();
const ref = db.ref("edgedemo/payments");


var key = ref.push();
ref.set({
	first: "John",
	last: "Doe",
	cardNumber: "1111222233334444",
	expMonth: "10",
	expYear: "2020",
	cvv: "123"
});

// GET transaction /payments
exports.payWithPalPay = function(req, res) {

	ref.on("value", function(snapshot) {
		res.json(snapshot.val());
		console.log(snapshot.val());
	}, function (errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};


