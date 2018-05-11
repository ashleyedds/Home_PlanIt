const router = require("express").Router();
const calendarRoutes = require("./events");
const recipeRoutes =require("./recipe");

router.use("/events", calendarRoutes);
router.use("/recipes", recipeRoutes)

module.exports = router;