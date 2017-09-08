import React from "react";
import axios from 'axios'; 

import helpers from '../utils/helpers'; 

class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state= {
      topic: "",
      term: "",
      searchTerm: "",
      startYr: "",
      endYr: "",
    };
  }

  // This function will respond to the user input
  handleChange (key, event) {
    this.setState({ [key]: event.target.value });
  }

  // When a user submits...
  handleSubmit (event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.runQuery(this.state.topic, this.state.startYr, this.state.endYr);

  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Article Search</div>

        <div className="panel-body">

          <form onSubmit={this.handleSubmit.bind(this)}>

            <div className="form-group">
              <label htmlFor="topic">Topic</label> 
              <input 
              value={this.state.topic}
              type="text" 
              onChange={this.handleChange.bind(this, "topic")}
              className="form-control" 
              id="topicInput" 
              placeholder="Topic" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="startYr">Start Year</label>
              <input type="text" 
              className="form-control" 
              id="startYrInput" 
              value={this.state.startYr}
              onChange={this.handleChange.bind(this, "startYr")}
              placeholder="Start Year" />
            </div>

            <div className="form-group">
              <label htmlFor="endYr">End Year</label>
              <input type="text" 
              className="form-control" 
              id="endYrInput" 
              value={this.state.endYr}
              onChange={this.handleChange.bind(this, "endYr")}
              placeholder="End Year" />
            </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-success">Search</button>
            </div>

          </form>

        </div>
      </div>
    );
  }
};

Search.displayName = "Search";

export default Search;