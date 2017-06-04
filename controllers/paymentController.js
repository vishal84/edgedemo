'use strict';

// Get Firebase object and service account key
const admin = require("firebase-admin");
const serviceAccount = require("../edgedemo-925ea.json");

var models = require('../models/models.js');

// Get a reference to Firebase DB for products, orders, etc
const db = admin.database();
const ref = db.ref("edgedemo/payments");

// POST transaction /payments
exports.payWithPalPay = function(req, res) {

	var payment = req.body;
	var newPayment = ref.push();

	newPayment.set(payment, function(error) {
		if (error) {
			res.json(error);
			console.log("The payment transaction failed: " + error);
		} else {
			res.json(newPayment.key);
			console.log("Payment transaction accepted: " + newPayment.key);
		}
	});

};


