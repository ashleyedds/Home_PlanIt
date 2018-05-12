const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const passport = require("passport");


router.route("/")
    .get(recipeController.findAll)
    .post(recipeController.create);
router.route("/:user")
    .get(recipeController.findByUser);
    // .post(recipeController.create);

router
    .route("/:id")
    .get(recipeController.findById)
    .delete(recipeController.remove);


module.exports = router;