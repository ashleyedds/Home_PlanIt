import axios from "axios";

export default {
    getEvents: function(){
        return axios.get("/api/events");
    },

    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData)
        .then(this.getEvents())
        .then(window.location.reload())
    }
}