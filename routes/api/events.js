const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");
const passport = require("passport");

router.route("/")
    .get(calendarController.findAll)
    .post(calendarController.create);

router.route("/user/:user")
    .get(calendarController.findByUser);

router
    .route("/:id")
    .get(calendarController.findById)
    .put(calendarController.update)
    .delete(calendarController.remove);


module.exports = router;