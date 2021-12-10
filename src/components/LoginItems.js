import { Component } from "react";
import { connect } from "react-redux";
import { logout } from '../actions/authedUser';

class LoginItems extends Component {
  logoutUser = () => {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div className="login-items">
        <img src={this.props.avatarURL}></img>
        <span className="name">{this.props.name}</span>
        <span className="vert-sep">|</span>
        <span className="logout" onClick={() => this.logoutUser()}>logout</span>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    avatarURL: users[authedUser].avatarURL,
    name: users[authedUser].name,
  }
}

export default connect(mapStateToProps)(LoginItems);