var Stocks = require('../models/stockprice.schema.js');

module.exports = {
    getStockPrice: getStockPrice,  
    getTotalCustomers: getTotalCustomers,
    updateStock: updateStock,
   
}

function getStockPrice(req,res){
        Stocks.find({}, function(err, docs){
        res.json(docs);
     });
}

function getTotalCustomers(req,res){
        Stocks.aggregate([{$group:{_id:"$bank",totalCustomers:{$sum:1}}}], function(err, docs){
        res.json(docs);
     });
}

function updateStock(req, res){
        Stocks.findOneAndUpdate({"bank":"nibl"},{$inc:{"price":1}}), function(err, docs){
        res.json(docs);
        }
}