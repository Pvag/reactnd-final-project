import { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardUser from './LeaderBoardUser';

function totalScore (user) {
  return Object.keys(user.questions).length + Object.keys(user.answers).length;
}

function usersScoreChartId (users) {
  return Object.keys(users).sort((a,b) => {
    return totalScore(users[b]) - totalScore(users[a]);
  });
}

class LeaderBoard extends Component {
  render() {
    return(
      <div className="leader-board">
        <h3>Leader Board</h3>
        <ul className="leader-board-list">
          {usersScoreChartId(this.props.users).map(id => (
            <li key={id}><LeaderBoardUser id={id} /></li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users).sort(),
    users,
  }
}

export default connect(mapStateToProps)(LeaderBoard);