var Sequelize = require("sequelize");

var sequelize = new Sequelize("testCalendar", "root", "pepper12", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;