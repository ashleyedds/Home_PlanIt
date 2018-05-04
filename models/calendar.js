module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        title: DataTypes.STRING,
        // allDay: DataTypes.BOOLEAN,
        // start: DataTypes.DATE,
        // end: DataTypes.DATE,
        // description: DataTypes.STRING
    });
return Event;
}
