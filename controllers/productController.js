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
ordersRef.push({
	id: "1",
	customer: {
		id: "1",
		first: "John",
		last: "Doe",
		email: "John.Doe@gmail.com",
		shipping: {
			street: "55 9th Avenue",
			city: "New York",
			state: "NY",
			zip: "10005"
		}
	},
	cart: {
		id: "1",
		products: [3, 7]
	},
	payment: {
		cardNumber: "1234 5678 9012 3456",
		month: "10",
		year: "2020",
		cvv: "123"
	}
});

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

