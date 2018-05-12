const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true},
    ingredients: { type: String, required: true },
    user: { type: String, required: true}
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;