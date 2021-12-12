import { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import { saveUserAnswer } from '../actions/users';
import { OPTION_ONE, OPTION_TWO } from "./Question";

const centerStyle = {
  textAlign: 'center',
}

class Poll extends Component {
  storeAnswer = (authedUser, qid, option) => {
    this.props.dispatch(handleSaveAnswer({
      authedUser,
      qid,
      answer: option,
    }));
    this.props.dispatch(saveUserAnswer({
      uid: authedUser,
      qid,
      option,
    }))
  }

  render () {
    const { question, author } = this.props;
    const { name, avatarURL } = author; 
    return(
      <div className="answer-brief-whole">
        <h3>{name} asks:</h3>
        <div className="question-brief">
          <img src={avatarURL} alt="author's avatar"></img>
          <div className="question-brief-questions">
            <span>Would you rather</span>
            <p className="option-style" onClick={
              () => this.storeAnswer(
                this.props.authedUser,
                question.id,
                OPTION_ONE)
              }>{question.optionOne.text}</p>
            <p style={centerStyle}>OR</p>
            <p className="option-style" onClick={
              () => this.storeAnswer(
                this.props.authedUser,
                question.id,
                OPTION_TWO)
            }>{question.optionTwo.text}</p>
            <p style={centerStyle}>?</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, { questionId }) {
  return {
    question: questions[questionId],
    author: users[questions[questionId].author],
    authedUser,
  }
}

export default connect(mapStateToProps)(Poll);