'use strict';

module.exports = function(app) {

  var products = require('../controllers/productController.js');
  var orders = require('../controllers/orderController.js');

  // productController routes
  app.route('/products')
	.get(products.getAllProducts);

  app.route('/products/:productId')
	.get(products.getProduct);

  // orderController routes
  app.route('/orders')
	.get(orders.getAllOrders)
	.post(orders.placeOrder);

  app.route('/orders/:orderId')
	.get(orders.getOrder)
	.put(orders.updateOrder)
	.delete(orders.cancelOrder);

};
