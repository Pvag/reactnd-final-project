import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Login from './Login';
import LeaderBoard from './LeaderBoard';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());

    console.log("wasssupp?");
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading
              ? null
              : <div>
                  <Route path="/" exact component={Home} />
                  <Route path="/new" component={NewQuestion} />
                  <Route path="/question/:id" component={Question} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/login" component={Login} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    loading: Object.keys(users).length === 0,
  }
}

export default connect(mapStateToProps)(App);