var React = require("react");

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>New York Times Scrubber</h1>
        <p>Search for Articles on the New York Times website and save them for later!</p>
      </div>
    );
  }
});

module.exports = Jumbotron;
