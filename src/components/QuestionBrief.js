import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// TODO remove unused state
export class QuestionBrief extends Component {
  render() {
    const { question, author } = this.props;
    const name = author.name;
    const avatarURL = author.avatarURL;
    return(
      <div className="question-brief-whole">
        <h3>{name} asks:</h3>
        <div className="question-brief">
          <img src={avatarURL} alt="logged user's avatar"></img>
          <div className="question-brief-questions">
            <span>Would you rather</span>
            <p>{question.optionOne.text}</p>
            <p>OR</p>
            <p>{question.optionTwo.text}</p>
            <p>?</p>
          </div>
        </div>
        <NavLink to={'/question/' + question.id}>
          <span className="goto-poll">Go to Poll</span>
        </NavLink>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, {questionId}) {
  return {
    question: questions[questionId],
    author: users[questions[questionId].author],
  }
}

export default connect(mapStateToProps)(QuestionBrief);