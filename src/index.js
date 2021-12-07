import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import middleware from './middlewares';
import { setAuthedUser } from './actions/authedUser';

const store = createStore(rootReducer, middleware);

// store.dispatch(setAuthedUser('sarahedo'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));