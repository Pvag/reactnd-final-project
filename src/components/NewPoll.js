import { Component } from 'react';
import { connect } from 'react-redux';
import { handleNewQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

const OPTION_ONE_TEXT = 'optionOneText';
const OPTION_TWO_TEXT = 'optionTwoText';

class NewPoll extends Component {
  state = {
    [OPTION_ONE_TEXT]: '',
    [OPTION_TWO_TEXT]: '',
    sent: false,
  };

  addNewQuestion = (e) => {
    e.preventDefault();
    const data = {
      [OPTION_ONE_TEXT]: this.state[OPTION_ONE_TEXT],
      [OPTION_TWO_TEXT]: this.state[OPTION_TWO_TEXT],
      author: this.props.authedUser,
    }

    this.props.dispatch(handleNewQuestion(data));

    this.setState(oldState => {
      return {
        ...oldState,
        sent: true,
      }
    })
  }

  inputChanged = (e) => {
    this.setState((oldState) => {
      return {
        ...oldState,
        [e.target.id]: e.target.value,
      }
    })
  }

  formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'flex-end',
    alignItems: 'center',
  }

  buttonStyle = {
    width: '30%',
  }

  validInput = () => {
    const l1 = this.state[OPTION_ONE_TEXT].length;
    const l2 = this.state[OPTION_TWO_TEXT].length;
    return l1 !== 0 && l2 !== 0;
  }

  render() {
    if (this.state.sent === true) {
      return <Redirect to="/" />
    }
    return(
      <div className="new-poll">
        <h3>Create your new poll</h3>
        <h4>Would You Rather</h4>
        <form style={this.formStyle}>
          <label htmlFor={OPTION_ONE_TEXT}>
            <input id={OPTION_ONE_TEXT}
              placeholder="the first option" onChange={(e) => this.inputChanged(e)}/> option one
          </label>
          <label htmlFor={OPTION_TWO_TEXT}>
            <input id={OPTION_TWO_TEXT}
              placeholder="the second option" onChange={(e) => this.inputChanged(e)}/> option two
          </label>
          <button style={this.buttonStyle} onClick={this.addNewQuestion}
            disabled={!this.validInput()}>Add Question</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    thisUser: users[authedUser],
    authedUser,
  }
}

export default connect(mapStateToProps)(NewPoll);