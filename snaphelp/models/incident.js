var mongoose = require("mongoose");

var incidentSchema = new mongoose.Schema({
    id: Number,
    username: String,
    image: String,
    tag: String,
    comment: String,
    lat: String,
    long: String,
    time: {type: Date, default:Date.now}
}, {usePushEach: true});

module.exports = mongoose.model("Incident", incidentSchema);