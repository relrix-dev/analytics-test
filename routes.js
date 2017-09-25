const express = require('express');
const router = express.Router();

const customerController = require('./controllers/customer.controller');
const stockpriceController = require('./controllers/stockprice.controller');
const viewController = require('./controllers/view.controller');

module.exports = router;

//Customer
router.get('/customer', customerController.getCustomer); 

//StockPrice
router.get('/stock/10', stockpriceController.getStockPrice);

/*View
router.get('/view/', viewController.getView); */

 