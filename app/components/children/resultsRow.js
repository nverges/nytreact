import React from "react";

import helpers from '../utils/helpers';

class ResultsRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    renderButton() {
        if (this.props.saved === true) {
            return (
                <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin"
                    onClick={helpers.postHistory.bind(
                    this, 
                    this.props.article_id, 
                    this.props.title, 
                    this.props.url,
                    this.props.date
                    )}>Save
                </button>
            )
        } else {
            console.log('ELSE', this.props._id);
            return (
            <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin"
                onClick={helpers.deleteHistory.bind(this, this.props._id)}>Delete
            </button>
            )
        }
    }

    render() {
        return (
        <div className="panel panel-default">

            <div className="panel-heading">   {this.props.title}

                {this.renderButton()}

            </div>

            <div className="panel-body">
                {this.props.url}
            </div>

        </div>
        )
    }
};

ResultsRow.displayName = "ResultsRow";

export default ResultsRow; 
