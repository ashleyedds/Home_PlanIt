const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Generic
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByUser: function(req, res) {
        db.Generic
          .find({user: req.params.user})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
        db.Generic
          .findById({_id: req.params.id})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        db.Generic
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    remove: function(req, res) {
        db.Generic
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      }
    
};