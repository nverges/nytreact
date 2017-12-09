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
<<<<<<< HEAD
                    onClick={this.props.saveClickHandler.bind(
                        this,
                        this.props.article_id, 
                        this.props.title, 
                        this.props.url,
                        this.props.date,
                        this.props.snippet
                        )}>Save
=======
                    onClick={helpers.postHistory.bind(
                    this, 
                    this.props.article_id, 
                    this.props.title, 
                    this.props.url,
                    this.props.date,
                    this.props.snippet
                    )}>Save
>>>>>>> 5f091c322221ac44ba98cccdf077a7f7cbf3cab6
                </button>
            )
            console.log('SAVED');
        } else {
            return (
            <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin"
                onClick={this.props.deleteClickHandler.bind(
                    this,
                    this.props._id)}>Delete
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
                {this.props.snippet}
            </div>

        </div>
        )
    }
};

ResultsRow.displayName = "ResultsRow";

export default ResultsRow; 
