var Stocks = require('../models/stockprice.schema.js');

module.exports = {
    getStockPrice: getStockPrice,  
    getSumPrice: getSumPrice,
   
}

function getStockPrice(req,res){
        Stocks.find({}, function(err, docs){
        res.json(docs);
     });
}

function getSumPrice(req,res){
     var sum = req.params.price;
     Stocks.aggregate({price: {$sum: price}} function(err, docs){
        res.json(docs);
        console.log(sum);
     }); 
}