const router = require("express").Router();
const calendarRoutes = require("./events");

router.use("/events", calendarRoutes);

module.exports = router;