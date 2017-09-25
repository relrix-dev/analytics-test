const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//var Customer = require('./models/customer.schema.js');
//var Stock = require('./models/stockprice.schema.js');
//var View = require('./models/view.schema.js');

var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/nibl';

mongoose.connect(url, {useMongoClient : true});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};


//Customer
/*
var newCustomer1 = Customer({
    cid: 1,
    name: "Sanat",
    phone: "98625364374",
    email: "sante@sante.com"
});
newCustomer1.save(function(err){ console.log(err); });

var newCustomer2 = Customer({
    cid: 2,
    name: "Abiral",
    phone: "98625364374",
    email: "sante@sante.com"
});
newCustomer2.save(function(err){ console.log(err); });

var newCustomer3 = Customer({
    cid: 3,
    name: "Yuva",
    phone: "988253674",
    email: "sante@sante.com"
});
newCustomer3.save(function(err){ console.log(err); });

var newCustomer4 = Customer({
    cid: 4,
    name: "Sanjog",
    phone: "98625364374",
    email: "sajog@sante.com"
});
newCustomer4.save(function(err){ console.log(err); });

var newCustomer5 = Customer({
    cid: 5,
    name: "Sanat34",
    phone: "98625364374",
    email: "sante34@sante.com"
});
newCustomer5.save(function(err){ console.log(err); });

var newCustomer6 = Customer({
    cid: 6,
    name: "Samat",
    phone: "98655564374",
    email: "samat@samat.com"
});
newCustomer6.save(function(err){ console.log(err); });

var newCustomer7 = Customer({
    cid: 7,
    name: "Sanat12",
    phone: "98625385374",
    email: "sante12@sante12.com"
});
newCustomer7.save(function(err){ console.log(err); });

var newCustomer8 = Customer({
    cid: 8,
    name: "Samiran",
    phone: "9841253698",
    email: "samiran@gmail.com"
});
newCustomer8.save(function(err){ console.log(err); });

var newCustomer9 = Customer({
    cid: 9,
    name: "Sagar",
    phone: "9878412536",
    email: "Sagar@gmail.com"
});
newCustomer9.save(function(err){ console.log(err); });

var newCustomer10 = Customer({
    cid: 10,
    name: "Rahul",
    phone: "9845124536",
    email: "Rahul@gmail.com"
});
newCustomer10.save(function(err){ console.log(err); });
  

//StockPrice
var newStock1 = Stock({
        date: "15/09/2017",
        price: "10000"
});
newStock1.save(function(err){console.log(err);});

var newStock2 = Stock({
        date: "16/09/2017",
        price: "20000"
});
newStock2.save(function(err){console.log(err);});

var newStock3 = Stock({
        date: "17/09/2017",
        price: "19000"
});
newStock3.save(function(err){console.log(err);});

var newStock4 = Stock({
        date: "18/09/2017",
        price: "21000"
});
newStock4.save(function(err){console.log(err);});

var newStock5 = Stock({
        date: "19/09/2017",
        price: "25000"
});
newStock5.save(function(err){console.log(err);});

var newStock6 = Stock({
        date: "20/09/2017",
        price: "27000"
});
newStock6.save(function(err){console.log(err);});

var newStock7 = Stock({
        date: "21/09/2017",
        price: "30000"
});
newStock7.save(function(err){console.log(err);});

var newStock8 = Stock({
        date: "22/09/2017",
        price: "20000"
});
newStock8.save(function(err){console.log(err);});

var newStock9 = Stock({
        date: "23/09/2017",
        price: "23000"
});
newStock9.save(function(err){console.log(err);});

var newStock10 = Stock({
        date: "24/09/2017",
        price: "9000"
});
newStock10.save(function(err){console.log(err);});

//Viwes
newView1 = View({
        cid: 1,
        latitude: "40.91143695",
        longitude: "-74.04441833"
})
newView1.save(function(err){console.log(err);});

newView2 = View({
        cid: 2,
        latitude: "28.394857",
        longitude: "84.124008"
})
newView2.save(function(err){console.log(err);});

newView3 = View({
        cid: 3,
        latitude: "28.41314415",
        longitude: "84.21363831"
})
newView3.save(function(err){console.log(err);});

newView4 = View({
        cid: 4,
        latitude: "28.47352011",
        longitude: "83.92799377"
})
newView4.save(function(err){console.log(err);});

newView5 = View({
        cid: 5,
        latitude: "28.49524701",
        longitude: "84.31938171"
})
newView5.save(function(err){console.log(err);});

newView6 = View({
        cid: 6,
        latitude: "28.30800793",
        longitude: "83.8483429"
})
newView6.save(function(err){console.log(err);});

newView7 = View({
        cid: 7,
        latitude: "28.41314415",
        longitude: "84.21363831"
})
newView7.save(function(err){console.log(err);});

newView8 = View({
        cid: 8,
        latitude: "28.41314415",
        longitude: "84.21363831"
})
newView8.save(function(err){console.log(err);});

newView9 = View({
        cid: 9,
        latitude: "28.41314415",
        longitude: "84.21363831"
})
newView9.save(function(err){console.log(err);});

newView10 = View({
        cid: 10,
        latitude: "28.41314415",
        longitude: "84.21363831"
})
newView10.save(function(err){console.log(err);});
*/


app.use(bodyParser.json());
app.use(allowCrossDomain);

app.use(require('./routes.js'));

app.listen(8080);
