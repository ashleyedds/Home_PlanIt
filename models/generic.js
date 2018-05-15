const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genericSchema = new Schema({
    title: { type: String, required: true},
    key: { type: String, required: true },
    user: { type: String, required: true}
});

const Generic = mongoose.model("Generic", genericSchema);

module.exports = Generic;