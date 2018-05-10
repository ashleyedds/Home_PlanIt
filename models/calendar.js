const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    title: { type: String, required: true},
    allDay: { type: Boolean, required: false},
    start: { type: String, required: true },
    end: { type: String, required: true },
    description: { type: String, required: false}
});

const Event = mongoose.model("Event", calendarSchema);

module.exports = Event;
