import { Component } from "react";
import { connect } from "react-redux";
import QuestionBrief from "./QuestionBrief";

const UNANSWERED = 'UNANSWERED';
const ANSWERED = 'ANSWERED';

function allVotesForQuestion (question) {
  let allVotes = [];
  allVotes = allVotes.concat(question.optionOne.votes);
  allVotes = allVotes.concat(question.optionTwo.votes);
  return allVotes;
}

function splitQuestions (questions, authedUser) {
  const ids = Object.keys(questions);
  const unansweredQuestionsId = ids.filter(id => {
    return !allVotesForQuestion(questions[id]).includes(authedUser);
  });
  const answeredQuestionsId = ids.filter(id =>
    allVotesForQuestion(questions[id]).includes(authedUser));
  const splittedQuestions = {
    UNANSWERED: unansweredQuestionsId,
    ANSWERED: answeredQuestionsId,
  };
  return splittedQuestions;
}

function List (props) {
  return(
    <ul>
      {props.questionsId.map(questionId => {
        return(
          // TODO add Link here
          <li key={questionId}><QuestionBrief questionId={questionId} /></li>
        )
      })}
    </ul>
  )
}

class AllQuestions extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showQuestionsOfType: UNANSWERED,
    }  

    this.splittedQuestions = splitQuestions(this.props.questions, this.props.authedUser);
  }

  componentDidMount () {
  }

  setQuestionType = (e) => {
    this.setState(() => {
      return {
        showQuestionsOfType: e.target.value,
      }
    });
  }

  render() {
    const questionsToShow = this.splittedQuestions[this.state.showQuestionsOfType];
    return(
      <div>
        <form>
          <legend>Choose the category of the questions to show</legend>
          <label htmlFor={UNANSWERED}>
            <input type="radio" name={UNANSWERED} value={UNANSWERED}
              onChange={this.setQuestionType} checked={this.state.showQuestionsOfType === UNANSWERED} />Unanswered
          </label><br/>
          <label htmlFor={ANSWERED}>
            <input type="radio" name={ANSWERED} value={ANSWERED}
              onChange={this.setQuestionType} checked={this.state.showQuestionsOfType === ANSWERED} />Answered
          </label><br/>
        </form>
        <div>
          <List questionsId={questionsToShow} />
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(AllQuestions);