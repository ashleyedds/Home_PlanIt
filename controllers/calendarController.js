const db = require("../models/calendar");

module.exports = {
    findAll: (req, res) => {
        db.Event
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
    