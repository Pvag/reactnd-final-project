import { Component } from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import Poll from './Poll';

export const FIRST_ANSWER = 'a';
export const SECOND_ANSWER = 'b';

class Question extends Component {
  constructor (props) {
    super(props);
    this.answer = '';
    const { question, authedUser } = this.props;
    this.ans = this.alreadyAnswered(question, authedUser)
  }

  alreadyAnswered = (question, authedUser) => {
    if (question.optionOne.votes.includes(authedUser)) {
      this.answer = FIRST_ANSWER;
    }
    else if (question.optionTwo.votes.includes(authedUser)) {
      this.answer = SECOND_ANSWER;
    }
    return this.answer !== '' ;
  }

  render() {
    const { question, author } = this.props;
    return(
      <div>
        {this.ans
          ? <Answer question={question} author={author} answer={this.answer} />
          : <Poll question={question} author={author} />}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const author = users[questions[id].author];
  return {
    question: questions[id],
    author,
    authedUser,
  }
}
export default connect(mapStateToProps)(Question);