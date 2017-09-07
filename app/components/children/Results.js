var React = require("react");

import _ from "lodash";
import ResultsRow from './resultsRow';

class Results extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Search Results",
      // articleTitle: "Article Title Here",
      // articleDetails: "Article Details Here",
      // buttonStatus: "Save"
    }
  }

  renderResults() {
    return _.map(this.props.results, (entry, index) => {
      return (

        <ResultsRow 

          saved={true} 
          title={entry.headline.main} 
          article_id={entry._id}
          url={entry.web_url}
          date={entry.pub_date}
          key={entry._id} 

        />
    
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
