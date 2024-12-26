var express = require("express");
var app = express();
var bodyParser = require("body-parser");







app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
    res.render("index");
});
{/* <img src="https://qrcode.tec-it.com/API/QRCode?data=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0aFN%3bCHARSET%3dUTF-8%3aJohn+Doe%0d%0aN%3bCHARSET%3dUTF-8%3aDoe%3bJohn%3b%3b%3b%0d%0aTEL%3bTYPE%3dHOME%2cVOICE%3a0043-7252-72720%0d%0aTEL%3bTYPE%3dWORK%2cVOICE%3a0043-7252-72720%0d%0aEMAIL%3aemail%40example.com%0d%0aORG%3bCHARSET%3dUTF-8%3aTEC-IT%0d%0aURL%3ahttps%3a%2f%2fwww.example.com%0d%0aEND%3aVCARD" /> */}

app.post("/vcard", function(req,res){
    // var url = "https://qrcode.tec-it.com/API/QRCode?data=BEGIN%3aVCARD%0d%0aVERSION%3a2.1%0d%0aN%3a" + req.body.fname + " " + req.body.lname + "%0d%0aTEL%3bHOME%3bVOICE%3a" + req.body.phonenumber +  "%0d%0aTEL%3bWORK%3bVOICE%3a" + req.body.worknumber + "%0d%0aEMAIL%3a" + req.body.email + "%0d%0aORG%3a" + req.body.organization + "%0d%0aTITLE%3a" + req.body.jobtitle + "%0d%0aBDAY%3a" + req.body.bday + "%0d%0aADR%3a" + req.body.address + "%0d%0aURL%3a" + req.body.website + "%0d%0aEND%3aVCARD&backcolor=%23ffffff";
var fname = req.body.fname;
var lname = encodeURIComponent(req.body.lname);
var phonenumber = encodeURIComponent(req.body.phonenumber);
var worknumber = encodeURIComponent(req.body.worknumber);
var email = encodeURIComponent(req.body.email);
var organization = encodeURIComponent(req.body.organization);
var jobtitle = encodeURIComponent(req.body.jobtitle);
var bday = encodeURIComponent(req.body.bday);
var address = encodeURIComponent(req.body.address);
var website = encodeURIComponent(req.body.website);
var facebookUsername = encodeURIComponent(req.body.facebook);
var linkedinUserName = encodeURIComponent(req.body.linkedin);
const imagePath = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
// const imagePath = req.file ? req.file.path : null;

    // Log results
console.log('Text Data:', );
console.log('Uploaded Image Path:', req.file);
let url =  "https://qrcode.tec-it.com/API/QRCode?data=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0a" +
            "N%3a" + lname + "%3b" + fname + 
            "%0d%0aTEL%3bHOME%3bVOICE%3a" + phonenumber + 
            "%0d%0aTEL%3bWORK%3bVOICE%3a" + worknumber + 
            "%0d%0aEMAIL%3a" + email + 
            "%0d%0aORG%3a" + organization + 
            "%0d%0aTITLE%3a" + jobtitle + 
            "%0d%0aBDAY%3a" + bday + 
            "%0d%0aADR%3a" + address + 
            "%0d%0aURL%3a" + website + 
            "%0d%0aX-SOCIALPROFILE%3ahttps%3a%2f%2fwww.facebook.com%2f" + facebookUsername + 
            "%0d%0aX-SOCIALPROFILE%3ahttps%3a%2f%2flinkedin.com%2fin%2f" + linkedinUserName + 
            "%0d%0aEND%3aVCARD&backcolor=%23ffffff%26charset%3Dutf-8%26size%3Dmedium%26dpi%3D100";
          console.log(url)
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
             linkedinUserName: req.body.linkedin,
             facebookUserName: req.body.facebook,
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