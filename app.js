var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelpcamp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
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
            res.render("index", {campgrounds: campgrounds});
        }
    });
    
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    
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
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        
        else {
            res.render("show", {campground: foundCampground});
        }
        
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});