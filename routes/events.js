var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/events', function(req, res, next) {
  res.locals.connection.query('SELECT * from events', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results))
    console.log("something is happening");
  });
});

module.exports = router;
