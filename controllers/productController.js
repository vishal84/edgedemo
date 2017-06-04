'use strict';

// Initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edgedemo-925ea.firebaseio.com/"
});

// Get a reference to Firebase DB for products, orders, etc
const db = admin.database();
const ref = db.ref("edgedemo/produdcts");

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

	var productId = req.params.taskId;
	ref.orderByChild("id").on("value", function(snapshot) {
		if (snapshot.key = productId) {
			res.json(snapshot.val());
			console.log(snapshot.val());
		}
	}, function(errorObject) {
		res.send(errorObject);
		console.log("The read failed: " + errorObject.code);
	});
};

