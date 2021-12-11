import { Component } from "react";
import { connect } from "react-redux";
import QuestionBrief from "./QuestionBrief";
import Answer from "./Answer";

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

function ListUnanswered (props) {
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

function ListAnswered (props) {
  const { questions, users, questionsId } = props;
  return(
    <ul>
      {questionsId.map(questionId => {
        const question = questions[questionId];
        const author = users[question.author];
        const answer = author.answers[questionId];
        return(
          // TODO add Link here
          <li key={questionId}><Answer question={question}
            author={author} answer={answer} /></li>
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

  setQuestionType = (e) => {
    this.setState(() => {
      return {
        showQuestionsOfType: e.target.value,
      }
    });
  }

  sortMostRecentFirst = (selectedQuestions) => {
    const { questions } = this.props;
    return selectedQuestions.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  }

  render() {
    const questionsToShow = this.splittedQuestions[this.state.showQuestionsOfType];
    const sortedQuestions = this.sortMostRecentFirst(questionsToShow);
    const { questions, users } = this.props;
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
          {this.state.showQuestionsOfType === UNANSWERED
            ? <ListUnanswered questionsId={sortedQuestions} />
            : <ListAnswered questionsId={sortedQuestions} questions={questions} users={users} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  return {
    questions,
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(AllQuestions);