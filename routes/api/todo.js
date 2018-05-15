const router = require("express").Router();
const todoController = require("../../controllers/todoController");
const passport = require("passport");


router.route("/")
    .get(todoController.findAll)
    .post(todoController.create);
router.route("/:user")
    .get(todoController.findByUser);
    // .post(recipeController.create);

router
    .route("/:id")
    .get(todoController.findById)
    .delete(todoController.remove);


module.exports = router;