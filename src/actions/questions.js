import { _saveQuestionAnswer } from "../utils/_DATA";

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SET_ANSWER = 'SET_ANSWER';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function doit(ans) {
  return {
    type: SET_ANSWER,
    ans
  }
}

export function saveAnswer (ans) {
  return (dispatch) => {
    _saveQuestionAnswer(ans)
      .then(() => (dispatch(doit(ans))));
  }
}