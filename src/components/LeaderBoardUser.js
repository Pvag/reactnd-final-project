import { Component } from "react"
import { connect } from "react-redux";

function totalScore (user) {
  return user.questions.length + Object.keys(user.answers).length;
}

class LeaderBoardUser extends Component {
  render () {
    const user = this.props.users[this.props.id];
    return(
      <div className="leader-board-user">
        <img src={user.avatarURL} alt="user avatar" />
        <div className="leader-board-stats">
          <p className="leader-board-stats-name">{user.name}</p>
          <p> has asked {user.questions.length} questions and answered {Object.keys(user.answers).length} questions.</p>
          <p className="leader-board-stats-score">Score: {totalScore(user)}</p>
        </div>
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