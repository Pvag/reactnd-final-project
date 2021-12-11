import { Component } from 'react';
import { connect } from 'react-redux';
// TODO remove unused state
export class QuestionBrief extends Component {
  render() {
    const name = this.props.author.name;
    const options = this.props.questions[this.props.questionId];
    const avatarURL = this.props.author.avatarURL;
    return(
      <div className="question-brief-whole">
        <h3>{name} asks:</h3>
        <div className="question-brief">
          <img src={avatarURL} alt="logged user's avatar"></img>
          <div className="question-brief-questions">
            <span>Would you rather</span>
            <p>{options.optionOne.text}</p>
            <p>OR</p>
            <p>{options.optionTwo.text}</p>
            <p>?</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedId, users }, {questionId}) {
  return {
    questions,
    questionId,
    authedId,
    author: users[questions[questionId].author],
  }
}

export default connect(mapStateToProps)(QuestionBrief);