var express = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB        = require("./seeds");


mongoose.connect("mongodb://localhost/yelpcamp");
seedDB();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


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
    
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        
        else {
            res.render("show", {campground: foundCampground});
        }
        
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Camp Compass server has started");
});