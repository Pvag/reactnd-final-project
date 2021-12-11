import { Component } from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import Poll from './Poll';

export const OPTION_ONE = 'optionOne';
export const OPTION_TWO = 'optionTwo';

class Question extends Component {
  constructor (props) {
    super(props);
    this.answer = '';
    const { question, authedUser } = this.props;
    this.ans = this.alreadyAnswered(question, authedUser)
  }

  alreadyAnswered = (question, authedUser) => {
    if (question.optionOne.votes.includes(authedUser)) {
      this.answer = OPTION_ONE;
    }
    else if (question.optionTwo.votes.includes(authedUser)) {
      this.answer = OPTION_TWO;
    }
    return this.answer !== '' ;
  }

  render() {
    const { question, author, id } = this.props;
    return(
      <div>
        {this.ans // TODO store this inside the redux's store ;)
          ? <Answer question={question} author={author} answer={this.answer} />
          : <Poll questionId={id} />}
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
    id,
  }
}
export default connect(mapStateToProps)(Question);