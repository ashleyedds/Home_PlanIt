const router = require("express").Router();
const calendarRoutes = require("./events");
const recipeRoutes =require("./recipe");
const listRoutes =require("./list");
const todoRoutes = require("./todo");
const genericRoutes = require("./generic")

router.use("/events", calendarRoutes);
router.use("/recipes", recipeRoutes)
router.use("/lists", listRoutes)
router.use("/todos", todoRoutes)
router.use("/generic", genericRoutes)

module.exports = router;