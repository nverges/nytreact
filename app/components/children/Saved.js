var React = require("react");

import ResultsRow from "./resultsRow";

class Saved extends React.Component {

  constructor(props) {
      super(props) 
        this.state = {
        title: "Saved Articles",
        savedArticleTitle: "Saved Article Title Here",
        savedArticleDetails: "Saved Article Details Here",
        buttonStatus: "Delete"
      }
  }

  renderHistory() {
    return _.map(this.props.history, (entry, index) => {

      return (

        <ResultsRow 
          saved={false} 
          article_id={entry.article_id}
          title={entry.title}
          date={entry.date}
          url={entry.url}
          key={entry._id} 
          _id={entry._id}
        />

      )
    });
  };
  
  render() {
    return (
      <div className="panel panel-primary">

        <div className="panel-heading">{this.state.title}</div>

          <div className="panel-body">
            {this.renderHistory()}
          </div>

      </div>
    );
  }
};

Saved.displayName = "Saved";

export default Saved;
