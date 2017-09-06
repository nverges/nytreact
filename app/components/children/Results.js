var React = require("react");

import _ from "lodash";

class Results extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Search Results",
      // articleTitle: "Article Title Here",
      // articleDetails: "Article Details Here",
      buttonStatus: "Save"
    }
  }

  renderResults() {
    return _.map(this.props.results, (entry, index) => {
      return (

        <div className="panel panel-default" key={entry._id}>

            <div className="panel-heading">   {entry.headline.main}
              <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin">{this.state.buttonStatus}</button>
            </div>

            <div className="panel-body">
              {entry.web_url}
            </div>

        </div>
                
      )
    });
  };

  render() {
    return (
      <div className="panel panel-primary">
      <div className="panel-heading">{this.state.title}</div>
        <div className="panel-body">
          {this.renderResults()}
        </div>
      </div>
    );
  }
};

Results.displayName = "Results";

export default Results;
