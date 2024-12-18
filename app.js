var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");





mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



mongoose.connect('mongodb://localhost:27017/QRGENERATOR');

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
    res.render("index");
});

app.post("/vcard",function(req,res){
    var url = "https://qrcode.tec-it.com/API/QRCode?data=BEGIN%3aVCARD%0d%0aVERSION%3a2.1%0d%0aN%3a" + req.body.fname + " " + req.body.lname + "%0d%0aTEL%3bHOME%3bVOICE%3a" + req.body.phonenumber +  "%0d%0aTEL%3bWORK%3bVOICE%3a" + req.body.worknumber + "%0d%0aEMAIL%3a" + req.body.email + "%0d%0aORG%3a" + req.body.organization + "%0d%0aTITLE%3a" + req.body.jobtitle + "%0d%0aBDAY%3a" + req.body.bday + "%0d%0aADR%3a" + req.body.address + "%0d%0aURL%3a" + req.body.website + "%0d%0aEND%3aVCARD&backcolor=%23ffffff";
    res.status(201).json({
             status: "successfully added image",
             imgurl : url,
             email: req.body.email,
             name: req.body.fname + " " +  req.body.lname,
             jobtitle : req.body.jobtitle,
             organization: req.body.organization,
             phone: req.body.phonenumber,
             worktel: req.body.worknumber,
             address: req.body.address,
             website: req.body.website,
     });
});


app.post("/url",function(req,res){
    var url = "https://api.qrserver.com/v1/create-qr-code/?data=" + req.body.url +"&size=500x500";
    res.status(201).json({
        status: "successfully added image",
        imgurl : url,
});
});






app.listen("3030",function(){
    console.log("server started");
});