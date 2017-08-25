var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

    var campgrounds = [
        {name: "Salmon Creek", image: "http://camprrm.com/wp-content/uploads/2012/02/widewaters-campground-1.jpg"},
        {name: "Granite Hill", image: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg"},
        {name: "Mountain Goats rest", image: "https://i.pinimg.com/originals/06/6a/15/066a1533f201a24639738a06db7eb996.jpg"},
        {name: "Salmon Creek", image: "http://camprrm.com/wp-content/uploads/2012/02/widewaters-campground-1.jpg"},
        {name: "Granite Hill", image: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg"},
        {name: "Mountain Goats rest", image: "https://i.pinimg.com/originals/06/6a/15/066a1533f201a24639738a06db7eb996.jpg"},
        {name: "Salmon Creek", image: "http://camprrm.com/wp-content/uploads/2012/02/widewaters-campground-1.jpg"},
        {name: "Granite Hill", image: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg"},
        {name: "Mountain Goats rest", image: "https://i.pinimg.com/originals/06/6a/15/066a1533f201a24639738a06db7eb996.jpg"},
        {name: "Salmon Creek", image: "http://camprrm.com/wp-content/uploads/2012/02/widewaters-campground-1.jpg"},
        {name: "Granite Hill", image: "http://www.destination360.com/north-america/us/utah/salt-lake-city/images/s/camping.jpg"},
        {name: "Mountain Goats rest", image: "https://i.pinimg.com/originals/06/6a/15/066a1533f201a24639738a06db7eb996.jpg"}
        ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
    // get data from form and add to campgrounds array
    //redirect to campgrounds page
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});