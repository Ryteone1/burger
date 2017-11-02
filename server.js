// NOTE: I COULD NOT GET THIS APP TO DEPLOY SUCCESSFULLY TO HEROKU OR TO WORK. I got the following err messages: 
// npm ERR! burger@1.0.0 start: `node server.js`
// npm ERR! Failed at the burger@1.0.0 start script.

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});