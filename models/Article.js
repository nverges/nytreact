// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({

  article_id: {
    type: String,
  },
  // title is a required string
  title: {
    type: String,
    // required: true
  },
  // link is a required string
  date: {
    type: String,
    // required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  url: {
    type: String,
    // required: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
