var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelpcamp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("campground", campSchema);


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    Campground.find({}, function(err, campgrounds){
        if (err) {
            console.log(err);
        }
        
        else {
            res.render("campgrounds", {campgrounds: campgrounds});
        }
    });
    
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err);
        }
        
        else {
           res.redirect("/campgrounds"); 
        }
        
    });
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});