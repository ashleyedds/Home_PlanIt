const router = require("express").Router();
const genericController = require("../../controllers/genericController");
const passport = require("passport");


router.route("/")
    .get(genericController.findAll)
    .post(genericController.create);
router.route("/:user")
    .get(genericController.findByUser);
    // .post(recipeController.create);

router
    .route("/:id")
    .get(genericController.findById)
    .delete(genericController.remove);


module.exports = router;