const express = require('express');
const app = express();

app.get("/api/timestamp/:date_string", function (req,res,next){

var date_string = req.params.date_string;

var date = Date.parse(date_string)
if (isNaN(date)==false)
{ req.time = new Date(date_string).toUTCString();
req.unix = new Date(date_string).getTime();
}

else if (isNaN(date)==true){

req.time= "invalid date";
req.unix= "null";
}

else {
req.time = new Date().toUTCString();
req.unix = new Date().getTime();
}


next();

}, function (req,res) {

res.json ({unix: req.unix,
        utc: req.time })

})
