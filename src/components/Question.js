import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Answer from './Answer';
import Poll from './Poll';

export const OPTION_ONE = 'optionOne';
export const OPTION_TWO = 'optionTwo';

class Question extends Component {
  constructor (props) {
    super(props);
    this.answer = '';
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
    const { question, author, id, authedUser } = this.props;
    if (question === null) {
      return <Redirect to="/notfound" />
    }

    return(
      <div>
        {this.alreadyAnswered(question, authedUser)
          ? <Answer question={question} author={author} answer={this.answer} />
          : <Poll questionId={id} />}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id] ? questions[id] : null;
  const author = question ? users[question.author] : null;
  return {
    question: question,
    author,
    authedUser,
    id,
  }
}
export default connect(mapStateToProps)(Question);