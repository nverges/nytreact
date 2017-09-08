// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios';

// API key
var apikey = "e9db19e4654b4f4f9bd08840dd18671d";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(callback, topic, startYr, endYr) {


    console.log(callback, topic, startYr, endYr);  
    // cleans up format of search terms
    var q = (topic || "").trim();
    var begin_date = (startYr || "").trim() + "0101";
    var end_date = (endYr || "").trim() + "1231";

    // runs search query
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "apikey": apikey,
        "q": q,
        "begin_date": begin_date,
        "end_date": end_date
      }
    }).then(function(res) {
      console.log("Performs the Query");
      console.log(res.data.response.docs);
      callback(res.data.response.docs)
      return
      // return res.data.response;
    }).catch(function(err) {
      console.log(err);
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postHistory: function(article_id, title, date, url) {
    return axios.post("/api/saved", { 
      article_id: article_id,
      title: title,
      date: date,
      url: url
    });
  },

  deleteHistory: function(_id) {
      return axios({
        method: 'delete',
        url: '/api/saved',
        data: _id,
        responseType: 'json'
      }).then(function(res) {
        console.log("Article Deleted");
      }).catch(function(err) {
        console.log(err);
      });
    }
  
};

// We export the API helper
module.exports = helper;


