import { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const { question, author } = this.props;
    const name = author.name;
    const avatarURL = author.avatarURL;
    return(
      <div className="question-brief-whole">
        <h3>{name} asks:</h3>
        <div className="question-brief">
          <img src={avatarURL} alt="author's avatar"></img>
          <div className="question-brief-questions">
            <span>Would you rather</span>
            <p>{question.optionOne.text}</p>
            <p>OR</p>
            <p>{question.optionTwo.text}</p>
            <p>?</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params;
  const author = users[questions[id].author];
  return {
    question: questions[id],
    author
  }
}
export default connect(mapStateToProps)(Question);