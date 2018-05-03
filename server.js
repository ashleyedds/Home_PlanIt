const express = require("express");
const bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/api/events');

const app = express();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");
const Sequelize = require("sequelize");


// module.exports = new Sequelize("testCalendar", "root", "pepper12", {
// 	host: "localhost",
// 	dialect: "mysql",
// 	pool: {
// 		max: 5,
// 		min: 0
// 	}
// });

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'pepper12',
		database : 'testCalendar'
	});
	res.locals.connection.connect();
	next();
});

// Configure body parser for AJAX requests
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

app.use('/', indexRouter);
app.use('/events', eventsRouter);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;