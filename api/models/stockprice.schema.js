var mongoose = require('mongoose');
var schema = mongoose.Schema;

var stockSchema = new schema({
    bank:{
        type: String,
    },
    date:{
        type: String,
    },
    price:{
        type: String,  
    }
});

var Stock = mongoose.model('stock', stockSchema);
module.exports = Stock; 