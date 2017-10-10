var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user"),
    middleware  = require("../middleware");
    

router.get("/", function(req, res){
    res.render("landing");
});

// Authentication Routes

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new User({Username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            return res.render("register");
        }
        else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/campgrounds");
            });
        }
    });
});


//User Login Logout

router.get("/login", function(req, res){
    res.render("login");
});


router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds", 
        failureRedirect: "/login"
        
    }), function(req, res){
    
});


router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/campgrounds");
});


module.exports = router;