const express = require('express');
const router = express.Router();

const customerController = require('./controllers/customer.controller');
const stockpriceController = require('./controllers/stockprice.controller');
const viewController = require('./controllers/view.controller');

module.exports = router;

//Customer
router.get('/customers', customerController.getCustomer); 
router.get('/customer/:cid', customerController.getCid);

//StockPrice
router.get('/stock/', stockpriceController.getStockPrice);
router.get('/stock/totalcustomers', stockpriceController.getTotalCustomers);

///View
router.get('/views', viewController.getViews); 

 