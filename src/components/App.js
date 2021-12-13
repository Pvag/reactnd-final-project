import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import NewPoll from './NewPoll';
import Question from './Question';
import Login from './Login';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';
import '../style/App.css';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.authedUser === null ? null : <Header />}
            {this.props.loading
              ? null
              : <div>
                <Switch>
                  <Route path="/" exact component={this.props.authedUser ? Home : Login} />
                  <Route path="/add" component={this.props.authedUser ? NewPoll : Login} />
                  <Route path="/question/:id" component={this.props.authedUser ? Question : Login} />
                  <Route path="/leaderboard" component={this.props.authedUser ? LeaderBoard : Login} />
                  {/* <Route path="*" component={NotFound} /> */}
                  <Route path="*" children={ <NotFound authedUser={this.props.authedUser} />} />
                </Switch>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: Object.keys(users).length === 0,
    authedUser,
  }
}

export default connect(mapStateToProps)(App);