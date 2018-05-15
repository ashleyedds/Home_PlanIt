const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: { type: String, required: true},
    key: { type: String, required: true },
    user: { type: String, required: true}
});

const List = mongoose.model("List", listSchema);

module.exports = List;