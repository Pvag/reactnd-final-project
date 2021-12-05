import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
// import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading';

export default function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions));
        // dispatch(setAuthedUser(AUTHED_ID));
      });
    _getUsers()
    .then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  }
}