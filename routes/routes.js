'use strict';

module.exports = function(app) {

  var products = require('../controllers/productController.js');
  var orders = require('../controllers/orderController.js');
  var payments = require('../controllers/paymentController.js');

  // productController routes
  app.route('/products*')
	.get(products.getProduct);

  // orderController routes
  app.route('/orders')
	.get(orders.getAllOrders)
	.post(orders.placeOrder);

  app.route('/orders/:orderId')
	.get(orders.getOrder)
	.put(orders.updateOrder)
	.delete(orders.cancelOrder);

  // paymentController routes
  app.route('/payments')
  .get(payments.getPalPayDetails)
  .post(payments.addPaymentMethod);

};
