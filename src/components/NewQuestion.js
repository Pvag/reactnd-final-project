import { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    return(
      <h3>New Question!</h3>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    thisUser: users[authedUser],
  }
}

export default connect(mapStateToProps)(NewQuestion);