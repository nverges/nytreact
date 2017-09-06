import React from "react";

// import entry from './Results';

class ResultsRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <div className="panel panel-default">

            <div className="panel-heading">   {this.props.entry.headline.main}
                <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin">Save</button>
            </div>

            <div className="panel-body">
                {this.props.entry.web_url}
            </div>

        </div>
        )
    }
        
};

ResultsRow.displayName = "ResultsRow";

export default ResultsRow;