const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const eventSchema = new Schema({
    title: { type: String, require: true },
    allDay: { type: Boolean, required: false },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String, required: false }
})

const Events = mongoose.model("Events", eventSchema);
module.exports = Events;