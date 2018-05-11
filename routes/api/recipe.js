const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const passport = require("passport");

router.route("/")
    .get(recipeController.findAll)
    .post(recipeController.create)


module.exports = router;