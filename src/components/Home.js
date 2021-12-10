import { Component } from 'react';
import { connect } from 'react-redux';
import QuestionBrief from './QuestionBrief';
import AllQuestions from './AllQuestions';



// function SeparateUnansweredFromAnswered (props) {
//   const { questions, 
//   const unansweredQuestionsId = props.questionsId.filter(id)
// }

export class Home extends Component {
  render() {
    return(
      <div>
        <h3>Buh!</h3>
        <h4>Welcome, {this.props.authedUser} !</h4>
        {/* <List questionsId={this.props.questionsId} /> */}
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