var mongoose = require('mongoose');
var schema = mongoose.Schema;

var customerSchema = new schema({
    cid:{
        type: Number
    },
    name:{
        type: String
    },
    phone:{
        type: String
    },
     email:{
        type: String
    }
});

var Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;