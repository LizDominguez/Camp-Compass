var express     = require("express"),
    router      = express.Router(),
    Campground  = require("../models/campground"),
    middleware  = require("../middleware");

//Index
router.get("/campgrounds", function(req, res){
    
    Campground.find({}, function(err, allCampgrounds){
        if (err) {
            console.log(err);
        }
        
        else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    });
    
});

router.post("/campgrounds", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    
    var newCampground = {name: name, image: image, description: description, author: author};
    
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err);
        }
        
        else {
           res.redirect("/campgrounds"); 
        }
        
    });
    
});

router.get("/campgrounds/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

router.get("/campgrounds/:id", function(req, res){
    
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        
        else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
        
    });
    
});

/*********** Edit Camp*********/
router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
        
    Campground.findById(req.params.id, function(err, foundCampground){
         
        res.render("campgrounds/edit", {campground: foundCampground});
            
    });
    
});

/*********** Update Camp*********/
router.put("/campgrounds/:id",middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } 
       
       else {
           //redirect somewhere(show page)
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});


/*********** Delete Camp*********/
router.delete("/campgrounds/:id",middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/campgrounds");
      } 
      
      else {
          res.redirect("/campgrounds");
      }
   });
});


module.exports = router;