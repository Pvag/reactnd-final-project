import { Component } from "react";
import { connect } from "react-redux";
import { logout } from '../actions/authedUser';
import { NavLink } from 'react-router-dom';

class LoginItems extends Component {
  logoutUser = () => {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div className="login-items">
        <img src={this.props.avatarURL} alt="user's avatar"></img>
        <span className="name">{this.props.name}</span>
        <span className="vert-sep">|</span>
        <span className="logout" onClick={() => this.logoutUser()}>
          <NavLink to="/" exact activeClassName="" className="logout-menu">
            Logout
          </NavLink>
        </span>
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