import axios from "axios";

export default {
    getEvents: function(){
        return axios.get("/api/events");
    },

    getEvent: function(id) {
        return axios.get("/api/events/" + id)
    },

    deleteEvent: function(id) {
        return axios.delete("/api/events/" + id)
        // .then(this.getEvents())
        // .then(window.location.reload())
    },

    updateEvent: function(id, eventData) {
        return axios.put("/api/events/" + id, eventData)
        .then(this.getEvents())
        // .then(window.location.reload())
    },

    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData)
        // .then(this.getEvents())
        // .then(window.location.reload())
    }
}