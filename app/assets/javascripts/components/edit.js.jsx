/* global React */
var Edit = React.createClass({
  clickHandler: function (event) {
      window.href = '/#profile'
  },
  render: function () {
    return (
      <div>
        <h1>Edit Profile</h1>
        <button onClick={this.clickHandler}>Cancel</button>
      </div>
    );
  }
});
