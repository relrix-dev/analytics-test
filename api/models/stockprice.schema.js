var mongoose = require('mongoose');
var schema = mongoose.Schema;

var stockSchema = new schema({
    date:{
        type: String,
    },
    price:{
        type: String,  
    }
});

var Stock = mongoose.model('stock', stockSchema);
module.exports = Stock; 