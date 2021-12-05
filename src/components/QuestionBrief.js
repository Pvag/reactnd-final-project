import { Component } from 'react';
import { connect } from 'react-redux';

export class QuestionBrief extends Component {
  render() {
    return(
      <div>
        <h3>The Question</h3>
        <p>{this.props.questions[this.props.questionId].optionOne.text}</p>
        <h4>OR</h4>
        <p>{this.props.questions[this.props.questionId].optionTwo.text}</p>
      </div>
    );
  }
}

function mapStateToProps({ questions }, {questionId}) {
  return {
    questions,
    questionId
  }
}

export default connect(mapStateToProps)(QuestionBrief);