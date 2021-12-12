import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from "../actions/users";

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_USER_ANSWER :
      const { uid, qid, option } = action.ans;
      return {
        ...state,
        [uid]: {
          ...state[uid],
          answers: {
            ...state[uid].answers,
            [qid]: option,
          }
        }
      }
    case SAVE_USER_QUESTION :
      const user = action.question.author;
      const userData = state[user];
      const questions = state[user].questions;
      return {
        ...state,
        [user]: {
          ...userData,
          questions: questions.concat(action.question.id),
        }
      }
    default :
      return state;
  }
}