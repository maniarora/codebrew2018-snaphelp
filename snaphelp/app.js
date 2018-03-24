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
app.listen(3000, "0.0.0.0", function(){
    console.log("SnapHelp server has started");
});