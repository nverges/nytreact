var React = require("react");

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
  
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{this.state.title}</div>

        <div className="panel-body">

            <div className="panel panel-default">
                <div className="panel-heading">{this.state.savedArticleTitle} <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin">{this.state.buttonStatus}</button></div>

                <div className="panel-body">
                    {this.state.savedArticleDetails}
                </div>
            </div>

        </div>
      </div>
    );
  }
};

Saved.displayName = "Saved";

export default Saved;
