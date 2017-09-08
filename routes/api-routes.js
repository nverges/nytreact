// Include Server Dependencies
const express = require("express");
// const router = express.Router();
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const Article = require('../models/Article');

// -------------------------------------------------
module.exports = function(router) {
    
    // Main "/" Route. This will redirect the user to our rendered React application
    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

    // This is the route we will send GET requests to retrieve our most recent search data.
    // We will call this route the moment our page gets rendered
    router.get("/api/saved", function(req, res) {

        // We will find all the records, sort it in descending order, then limit the records to 5
        Article.find({}).sort([
            ["name", "descending"]
        ]).limit(10).exec(function(err, doc) {
            if (err) {
            console.log(err);
            }
            else {
            res.send(doc);
            }
        });
    });
    
    // This is the route we will send POST requests to save each search.
    router.post("/api/saved", function(req, res) {

        // Here we'll save the location based on the JSON input.
        // We'll use Date.now() to always get the current date time
        Article.create( req.body , function(err) {
            if (err) {
                console.log(err);
            }
            else {
              res.send("Saved Search");
            }
        });
    });

    // Delete route
    router.delete("/api/saved", function(req, res) {
        console.log(req.body);
        Article.findOneAndRemove({
          _id: req.body}, function(err, doc) {
          if (err) {
            console.log(err);
          }
          else {
            res.send(doc);
          }
        })
      });

};
