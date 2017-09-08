// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Require History Schema
const Article = require("./models/Article.js");

///////////////// Initialize Express /////////////////
const app = express();
const router = express.Router();

// Pass router into routes file
require("./routes/api-routes")(router);

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Declares Express static folder
app.use(express.static("public"));

// Use Router
app.use(router);

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
if (PORT === 3000) {
  mongoose.connect("mongodb://localhost/nytreact", {
    useMongoClient: true
  });
} else {
  mongoose.connect("mongodb://heroku_ndqrkzz6:jcqblmcqcf1ckg0vmbqisonmnj@ds127044.mlab.com:27044/heroku_ndqrkzz6", {
    useMongoClient:true
  });
};
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
