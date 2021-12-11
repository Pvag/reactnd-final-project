import { ADD_QUESTION, RECEIVE_QUESTIONS, SET_ANSWER } from "../actions/questions";

export default function questions (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION :
      return '';
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      };
    case SET_ANSWER : // TODO ALSO SET DATA IN USER ! ADD THE OPTION AND QUESTIONID
      const { authedUser, qid, answer } = action.ans;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          }
        }
      }
    default :
      return state;
  }
}