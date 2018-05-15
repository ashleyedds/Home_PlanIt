const router = require("express").Router();
const calendarRoutes = require("./events");
const recipeRoutes =require("./recipe");
const listRoutes =require("./list");

router.use("/events", calendarRoutes);
router.use("/recipes", recipeRoutes)
router.use("/lists", listRoutes)

module.exports = router;