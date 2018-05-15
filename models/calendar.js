const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../server/db/models/user");

const calendarSchema = new Schema({
    title: { type: String, required: true},
    allDay: { type: Boolean, required: false},
    start: { type: String, required: true },
    end: { type: String, required: true },
    description: { type: String, required: false},
    user: { type: String, require: true}
});

const Event = mongoose.model("Event", calendarSchema);

module.exports = Event;
