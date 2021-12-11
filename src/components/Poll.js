import { Component } from "react";
import { connect } from "react-redux";

import { FIRST_ANSWER, SECOND_ANSWER } from "./Question";

const optionStyle = {
  border: '1px solid black',
  textAlign: 'center',
  cursor: 'pointer',
}

class Poll extends Component {
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
            <p style={optionStyle}>{question.optionOne.text}</p>
            <p>OR</p>
            <p style={optionStyle}>{question.optionTwo.text}</p>
            <p>?</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }, { question, author }) {
  return {
    question,
    author,
    authedUser,
  }
}

export default connect(mapStateToProps)(Poll);