var React = require("react");

var Results = React.createClass({

  getInitialState: function() {
    return {
      title: "Search Results",
      articleTitle: "Article Title Here",
      articleDetails: "Article Details Here"
    }
  },

  render: function () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{this.state.title}</div>

        <div className="panel-body">

            <div className="panel panel-default">
                <div className="panel-heading">{this.state.articleTitle} <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin">Save</button></div>

                <div className="panel-body">
                    {this.state.articleDetails}
                </div>
            </div>

        </div>
      </div>
    );
  }
});

module.exports = Results;
