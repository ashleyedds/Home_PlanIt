const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");
const passport = require("passport");

router.route("/")
    .get(calendarController.findAll);


module.exports = router;