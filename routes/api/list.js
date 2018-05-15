const router = require("express").Router();
const listController = require("../../controllers/listController");
const passport = require("passport");


router.route("/")
    .get(listController.findAll)
    .post(listController.create);
router.route("/:user")
    .get(listController.findByUser);
    // .post(recipeController.create);

router
    .route("/:id")
    .get(listController.findById)
    .delete(listController.remove);


module.exports = router;