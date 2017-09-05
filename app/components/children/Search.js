import React from "react";

import axios from 'axios'; 

// import helpers from './utils/helpers';

var Search = React.createClass({

    // This function will respond to the user input
    handleChange: function(event) {
      // Here we create syntax to capture any change in text to the query terms (pre-search).
      // See this Stack Overflow answer for more details:
      // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },
  
    // When a user submits...
    handleSubmit: function(event) {
      // preventing the form from trying to submit itself
      event.preventDefault();
      // Set the parent to have the search term
      this.props.setTerm(this.state.term);
  
      // Clearing the input field after submitting
      this.setState({ term: "" });
    },

  render: function () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Article Search</div>

        <div className="panel-body">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="formGroupExampleInput">Topic</label> 
              <input type="text" 
              // value={this.state.term}
              className="form-control" 
              id="topicInput" 
              placeholder="Topic" />
            </div>

            <div className="form-group">
              <label for="formGroupExampleInput2">Start Year</label>
              <input type="text" 
              className="form-control" 
              id="startYrInput" 
              // value={this.state.startYr}
              placeholder="Start Year" />
            </div>

            <div className="form-group">
              <label for="formGroupExampleInput2">End Year</label>
              <input type="text" 
              className="form-control" 
              id="endYrInput" 
              placeholder="End Year" />
            </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-success" id="searchbtn">Search</button>
            </div>

          </form>

        </div>
      </div>
    );
  }
});

module.exports = Search;
