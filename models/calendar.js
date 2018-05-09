const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    title: { type: String, required: true},
    allDay: { type: Boolean, required: false},
    start: {
        year: {type: Number, required: true},
        month: {type: Number, required: true },
        date: {type: Number, required: true}
    },
    end: {
        year: {type: Number, required: true},
        month: {type: Number, required: true },
        date: {type: Number, required: true}
    },
    description: { type: String, required: false}
});

const Event = mongoose.model("Event", calendarSchema);

module.exports = Event;
