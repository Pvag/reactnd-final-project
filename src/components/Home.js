import { Component } from 'react';
import { connect } from 'react-redux';
import AllQuestions from './AllQuestions';

export class Home extends Component {
  render() {
    return(
      <div>
        <h3>Buh!</h3>
        <h4>Welcome, {this.props.authedUser} !</h4>
        <AllQuestions />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questionsId: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Home);