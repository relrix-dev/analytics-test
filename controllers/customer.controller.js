var Customers = require('../models/customer.schema.js');

module.exports = {
    getCustomer: getCustomer,    
   
}

function getCustomer(req,res){
     Customers.find({}, function(err, docs){
        res.json(docs);
     });
}