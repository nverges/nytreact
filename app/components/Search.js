var React = require("react");

var Search = React.createClass({
  render: function () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Search Panel</div>

        <div className="panel-body">

          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Topic</label> 
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Start Year</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">End Year</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-success" id="searchbtn">Search</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
});

module.exports = Search;
