var Customers = require('../models/customer.schema.js');

module.exports = {
    getCustomer: getCustomer, 
    getCid: getCid,
}

function getCustomer(req,res){
     Customers.find({}, function(err, docs){
        res.json(docs);
     });
}

function getCid(req,res){
     var id = req.params.cid;
     Customers.find({cid: id}, function(err, docs){
        res.json(docs);
     });
}
