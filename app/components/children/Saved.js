var React = require("react");

import ResultsRow from "./resultsRow";

class Saved extends React.Component {

  constructor(props) {
      super(props) 
        this.state = {
          title: "Saved Articles"
        }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.history === nextProps) {
      this.setState({ history: nextProps})
    } else {
      return true
    }
  }

  renderHistory() {

    return _.map(this.props.history, (entry, index) => {

      return (

        <ResultsRow 

          saveClickHandler={this.props.saveClickHandler}
          deleteClickHandler={this.props.deleteClickHandler}
          saved={true} 
          article_id={entry.article_id}
          title={entry.title}
          date={entry.date}
          url={entry.url}
          snippet={entry.snippet}
          key={entry._id} 
          _id={entry._id}
        />

      )
    });
  }

  renderNoHistory() {
    return (
      <div className="panel panel-primary">

        <div className="panel-heading">{this.state.title}</div>

          <div className="panel-body">
            <h4>There are no Saved Articles here yet...</h4>
          </div>

      </div>
    );
  }
  
  render() {

    if (this.props.history.length === 0) {
      return (
        <div>
          {this.renderNoHistory()}
        </div>
      )
    } else {
      return (
        <div className="panel panel-primary">

          <div className="panel-heading">{this.state.title}</div>

            <div className="panel-body">
              {this.renderHistory()}
            </div>

        </div>
      );
    }
  }

};

Saved.displayName = "Saved";

export default Saved;
