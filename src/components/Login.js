import { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

export class Login extends Component {
  loginWithUser = (id) => {
    this.props.dispatch(setAuthedUser(id));
  }

  render() {
    return(
      <div id="login">
        <h2 className="center">Please, login first</h2>
        <ul id="login-list">
          {this.props.usersId.map(userId => {
            return(
              <li key={userId} onClick={() => this.loginWithUser(userId)}>
                <img src={this.props.users[userId].avatarURL} />
                <span>{userId}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    usersId: Object.keys(users),
  }
}

export default connect(mapStateToProps)(Login);