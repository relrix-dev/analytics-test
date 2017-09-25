var Views = require('../models/view.schema.js');

module.exports = {
    getViews: getViews    
   
}

function getViews(req,res){
     Views.find({}, function(err, docs){
        res.json(docs);
     });
}