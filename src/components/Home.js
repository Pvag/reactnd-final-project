import { Component } from 'react';
import { connect } from 'react-redux';
import AllQuestions from './AllQuestions';

export class Home extends Component {
  render() {
    return(
      <div>
        <h4>Welcome, {this.props.name} !</h4>
        <AllQuestions />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    name: users[authedUser].name,
  }
}

export default connect(mapStateToProps)(Home);