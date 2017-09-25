var mongoose = require('mongoose');
var schema = mongoose.Schema;

var viewSchema = new schema({
    cid:{
        type: Number,  
    },
    latitude:{
        type: String,
    },
    longitude:{
        type: String,  
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
});

var View = mongoose.model('view', viewSchema);
module.exports = View;