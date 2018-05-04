var db = require("../models");
const router = require("express").Router();


// module.exports = function(app) {
//     app.get("/api/events", function(req, res) {
//         db.Event.findAll({})
//         .then(function(results) {
//             res.json(results)
//             console.log(results)
//         });
//     });
// }

module.exports = function(app){
    router.route("/api/events")
    .get(function(req, res) {
        db.Event.findAll({})
    .then(function(results){
        res.json(results)
    
    });
    });
}
    