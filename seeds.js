var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Seal Rock Campground", 
        image: "https://c2.staticflickr.com/8/7441/11281671695_3f5b89888c_b.jpg",
        description: "This popular campground with its beautiful views of Hood Canal and the mountains to the southeast is located directly on Hood Canal."
    },
    
    {
        name: "Game Farm Wilderness Park", 
        image: "http://www.auburnwa.gov/Assets/Parks/AuburnWA/Images/Parks/Game+Farm+Park+1.jpg",
        description: "Set within 72 acres, the grounds offer year-round group camping sites & an 18-hole disc golf course."
    },
    
    {
        name: "Deer Park Campground", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/08/e5/8b/0b/deer-park-campground.jpg",
        description: "Breathtaking views of Olympic National Park. Great spot for night photography. Access to scenic hiking trails."
    },
    
    {
        name: "Hamma Hamma", 
        image: "https://i2.wp.com/rvsueandcrew.net/wp-content/uploads/2013/09/1-P1070101.jpg",
        description: "The Hamma Hamma Cabin is a historic cabin that offers guests a tranquil setting to relax and recreate."
    }
    
];

function seedDB () {
    
    /* Remove Campgrounds*/
    
    Campground.remove({}, function(err){
        
    if (err) {
        console.log("error");
    }
    
    
    console.log("removed");
    
    
        /* Add Campgrounds*/
    
    /*data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if (err){
                console.log("error");
            }
            else {
                console.log("added camps");
      
                //Create Comments
                
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            campground.comments.push(comment);
                            campground.save();
                        }
                    });
                    
                    
            }
            
        });
    });*/
    
    
    });
    
}

module.exports = seedDB;
