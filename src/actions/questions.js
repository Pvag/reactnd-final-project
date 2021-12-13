import { _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function saveAnswerAction(ans) {
  return {
    type: SAVE_QUESTION_ANSWER,
    ans
  }
}

export function handleSaveAnswer (ans) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer(ans)
      .then(() => {
        dispatch(saveAnswerAction(ans));
        dispatch(hideLoading());
      });
  }
}

export function addQuestionAction(data) {
  return {
    type: ADD_QUESTION,
    data,
  }
}