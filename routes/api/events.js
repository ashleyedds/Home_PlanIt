const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");


/* GET users listing. */
router.route("/calendar")
  .get(calendarController.findAll);

module.exports = router;
