// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// We need to include all of the components we"re utilizing
var Navbar = require("./components/Navbar");
var Jumbotron = require("./components/Jumbotron");
var Search = require("./components/Search");
const Results = require('./components/Results');
import Saved from './components/Saved';

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  <div className="container">

    <Jumbotron />
    <Search />
    <Results />
    <Saved />
  </div>
  , document.getElementById("app")
);

