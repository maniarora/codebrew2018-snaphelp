var express                 = require("express"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    methodOverride          = require("method-override"),
    Incident                = require("./models/incident.js"),
    seedDB                  = require("./seeds");
var app                     = express();


mongoose.connect("mongodb://localhost/snaphelp");
mongoose.Promise = global.Promise;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
seedDB();



app.get("/", function(req, res){
    res.render("homepage");
});

app.get("/incidents", function(req, res){
     // Get all incidents from db
    Incident.find({}, function(err, allIncidents){
        if(err){
            console.log(err);
        } else {
            res.render("incidents", {incidents: allIncidents});
        }
    });
});

app.post("/create", function(req, res){
    var img = req.body.image;
    var splitImg = img.split(',');
    var base64String = splitImg[1];
    const buffer = Buffer.from(base64String, 'base64');

    var id = req.body.id;
    var user = req.body.user;
    var tag = req.body.tag;
    var comment = req.body.comment;
    var lat = req.body.lat;
    var long = req.body.long;
    console.log(req.body.title);
});

app.listen(8080, "0.0.0.0", function(){
    console.log("SnapHelp server has started");
});