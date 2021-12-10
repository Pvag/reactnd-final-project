import { Component } from "react"
import { connect } from "react-redux";

function totalScore (user) {
  return user.questions.length + Object.keys(user.answers).length;
}

class LeaderBoardUser extends Component {
  render () {
    const user = this.props.users[this.props.id];
    return(
      <div>
        <img src={user.avatarURL} alt="user avatar" />
        <p>{user.name} has asked {user.questions.length} questions and answered {Object.keys(user.answers).length} questions.</p>
        <p>Score: {totalScore(user)}</p>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { id }) {
  return {
    users,
    id
  }
}

export default connect(mapStateToProps)(LeaderBoardUser);