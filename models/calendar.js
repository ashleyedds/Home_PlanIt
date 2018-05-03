const Sequelize = require("sequelize");
const connection = require("../server");

const Event = connection.define("event", {
    title: Sequelize.STRING,
    allDay: Sequelize.BOOLEAN,
    start: Sequelize.DATE,
    end: Sequelize.DATE,
    description: Sequelize.STRING
});

Event.sync();

module.exports = Event;