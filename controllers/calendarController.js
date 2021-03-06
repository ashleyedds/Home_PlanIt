const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Event
        .find()
        .then(dbModel => {
            
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },
    findByUser: function(req, res) {
        db.Event
          .find({user: req.params.user})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
        db.Event
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        db.Event
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Event
        .findByIdAndUpdate({ _id: req.params.id }, 
            {
                "title": req.body.title,
                "start": req.body.start,
                "end": req.body.end,
                "description": req.body.description
            },
            { new: true }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Event
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}
    