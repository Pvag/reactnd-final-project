import { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

export class Login extends Component {
  loginWithUser = (id) => {
    this.props.dispatch(setAuthedUser(id));
  }

  render() {
    console.log(' QUESTION ID FROM LOGIN: ', this.props.questionId);
    return(
      <div id="login">
        <h1 className="welcome">Welcome to the <em>would you rather</em> game!</h1>
        <h2 className="center">Please, login first</h2>
        <ul id="login-list">
          {this.props.usersId.map(userId => {
            return(
              <li key={userId} onClick={() => this.loginWithUser(userId)}>
                <img src={this.props.users[userId].avatarURL} alt="logged user avatar" />
                <span>{userId}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }, props) {
  return {
    users,
    usersId: Object.keys(users),
    questionId: props.match.params,
  }
}

export default connect(mapStateToProps)(Login);