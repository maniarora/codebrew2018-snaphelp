var mongoose = require("mongoose"),
    Incident = require("./models/incident");


var data = [
    {
        id: 1,
        username: "Danish",
        photo: "http://www.melbourne.vic.gov.au/SiteCollectionImages/summer-transport460x340.jpg",
        tag: "HealthCare",
        comment: "It sucks",
        lat: "289372973",
        long: "283979213",
    },
    {
        id: 2,
        username: "Ben",
        photo: "http://www.melbourne.vic.gov.au/SiteCollectionImages/summer-transport460x340.jpg",
        tag: "HealthCare",
        comment: "It sucks",
        lat: "289",
        long: "283973",
    }
]

function seedDB(){
    Incident.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed");
        }
    });
    data.forEach(function(seed){
        Incident.create(seed, function(err, incident){
            if(err){
                console.log(err);
            } else {
                console.log("Added");
            }
        });
    });
}

module.exports = seedDB;