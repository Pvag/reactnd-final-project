import { ADD_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION :
      return '';
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      };
    default :
      return state;
  }
}