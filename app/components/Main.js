// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// We need to include all of the components we"re utilizing
import Search from "./children/Search";
import Results from './children/Results';
import Saved from './children/Saved';

import helpers from './utils/helpers';

class Main extends React.Component {

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  constructor (props) {
    super(props) 
      this.state = {
        results: [], 
        history: []
      }
  }

  // The moment the page renders get the History
  componentDidMount() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      // console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  }

  handleResults(results) {
    console.log("Handle Results: ")
    this.setState({
      results: results
    }, () => {
      console.log(this.state.results)
    })
  }

  saveClickHandler(article_id, title, url, date, snippet) {

    // save to DB
    helpers.postHistory(
        article_id, 
        title, 
        url,
        date,
        snippet
    ).then((res) => {
        // console.log(res.data);
            // update state of Main component 'this.state.history'
            // console.log(res);
        const newState = this.state.history.concat(res.data);
        this.setState({history: newState})
    });
  } 

  deleteClickHandler(_id) {

    // delete from DB
    helpers.deleteHistory(_id)
      .then((res) => {
      // return data;
      // return res;
      console.log(res);
      console.log('Delete Click Handler');
      // let updatedState = this.state.history.splice(res);
      // return newState;
      // this.setState({history: updatedState});
    });
  }




  render () {
      return (
          
          <div className="container">

              {/* Jumbotron */}
              <div className="jumbotron">
                  <h1>New York Times Scrubber</h1>
                  <p>Search for Articles on the New York Times website and save them for later!</p>
              </div>

              {/* Render Components */}
              <Search  runQuery={helpers.runQuery.bind(this, this.handleResults.bind(this))}/>
              <Results results={this.state.results} saveClickHandler={this.saveClickHandler.bind(this)} deleteClickHandler={this.deleteClickHandler.bind(this)} />
              <Saved history={this.state.history} saveClickHandler={this.saveClickHandler.bind(this)} deleteClickHandler={this.deleteClickHandler.bind(this)} />

          </div>
      )
  }

};

Main.displayName = "Main";

export default Main;
