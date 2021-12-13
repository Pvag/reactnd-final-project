import { _getQuestions, _getUsers, _saveQuestion } from "../utils/_DATA";
import { receiveQuestions, addQuestionAction } from "./questions";
import { receiveUsers, saveUserQuestion } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading';

export default function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions));
      });
    _getUsers()
    .then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  }
}

export function handleNewQuestion (data) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestion(data)
      .then(formattedQuestion => {
        dispatch(addQuestionAction(formattedQuestion));
        dispatch(saveUserQuestion(formattedQuestion));
      })
      .then(() => dispatch(hideLoading()));
  }
}