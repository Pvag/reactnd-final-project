import { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardUser from './LeaderBoardUser';

function totalScore (user) {
  return user.questions.length + Object.keys(user.answers).length;
}

function usersScoreChartId (users) {
  return Object.keys(users).sort((a,b) => {
    return totalScore(users[b]) - totalScore(users[a]);
  });
}

class LeaderBoard extends Component {
  render() {
    return(
      <div>
        <h3>Leader Board</h3>
        <div className="lader-board">
          <ul>
            {usersScoreChartId(this.props.users).map(id => (
              <li key={id}><LeaderBoardUser id={id} /></li>
            ))}
          </ul>
        </div>
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