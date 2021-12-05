import { Component } from 'react';
import { connect } from 'react-redux';
import QuestionBrief from './QuestionBrief';

function List (props) {
  return(
    <ul>
      {props.questionsId.map(questionId => {
        return(
          <li key={questionId}><QuestionBrief questionId={questionId} /></li>
        )
      })}
    </ul>
  )
}

export class Home extends Component {
  render() {
    return(
      <div>
        <h3>Buh!</h3>
        <h4>Welcome, {this.props.authedUser} !</h4>
        <List questionsId={this.props.questionsId} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questionsId: Object.keys(questions),
  }
}

export default connect(mapStateToProps)(Home);