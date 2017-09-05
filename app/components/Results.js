var React = require("react");

var Results = React.createClass({
  render: function () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Results Panel</div>

        <div className="panel-body">

            <div className="panel panel-default">
                <div className="panel-heading">Result <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin">Save</button></div>

                <div className="panel-body">
                    Result Details
                </div>
            </div>

        </div>
      </div>
    );
  }
});

module.exports = Results;
