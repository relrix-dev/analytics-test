var Stocks = require('../models/stockprice.schema.js');

module.exports = {
    getStockPrice: getStockPrice,  
   
}

function getStockPrice(req,res){
     Stocks.find({}, function(err, docs){
        res.json(docs);
     });
}

