var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/lists/", function(req, res) {
    var query = {};
    if (req.query.member_id) {
      query.MemberId = req.query.member_id;
    }
    db.List.findAll({
      where: query,
      include: [db.Member]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/members", function(req, res) {
    db.Member.create(req.body).then(function(dbMember) {
      res.json(dbMember);
    });
  });

  

  // Get route for returning posts of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     db.Post.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

  // Get rotue for retrieving a single post
  app.get("/api/lists/:member_id", function(req, res) {
    db.List.findAll({
      where: {
        memberId: req.params.member_id
      }
    })
      .then(function(dbList) {
        res.json(dbList);
      });
  });

  // POST route for saving a new post
  // app.post("/api/lists", function(req, res) {
  //   console.log(req.body);
  //   db.List.create({
  //     title: req.body.title,
  //     key: req.body.key
  //   //   body: req.body.body,
  //   //   category: req.body.category
  //   })
  //     .then(function(dbList) {
  //       res.json(dbList);
  //     });
  // });

  app.post("/api/lists", function(req, res) {
    db.List.create({
      title: req.body.title,
      key: req.body.key,
      MemberId: req.body.MemberId
    }).then(function(dbList) {
      res.json(dbList);
    });
  });

  // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

  // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
};