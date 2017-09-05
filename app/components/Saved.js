var React = require("react");

var Saved = React.createClass({
  render: function () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Saved Results</div>

        <div className="panel-body">

            <div className="panel panel-default">
                <div className="panel-heading">Saved Result <button type="button" className="btn btn-primary pull-right btn-sm RbtnMargin">Primary</button></div>

                <div className="panel-body">
                    Saved Result Details
                </div>
            </div>

        </div>
      </div>
    );
  }
});

module.exports = Saved;
