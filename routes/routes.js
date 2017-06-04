'use strict';

module.exports = function(app) {

  var products = require('../controllers/productController.js');

  // productController routes
  app.route('/products')
	.get(products.getAllProducts)

  app.route('/products/:productId')
	.get(products.getProduct)

};
