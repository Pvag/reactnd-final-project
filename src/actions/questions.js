// import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
// import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
// export const TOGGLE_TWEET = 'TOGGLE_TWEET';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

// function toggleTweet ({id, authedUser, hasLiked}) {
//   return {
//     type: TOGGLE_TWEET,
//     id,
//     authedUser,
//     hasLiked,
//   }
// }

// function addTweet (tweet) {
//   return {
//     type: ADD_TWEET,
//     tweet,
//   }
// }

// export function handleAddTweet (text, replyingTo) {
//   return (dispatch, getState) => {
//     dispatch(showLoading());
//     saveTweet({
//       text,
//       author: getState().authedUser,
//       replyingTo,
//     })
//     .then((tweet) => dispatch(addTweet(tweet)))
//     .then(() => dispatch(hideLoading()));
//   }
// }

// export function handleToggleTweet (info) {
//   return (dispatch) => {
//     dispatch(toggleTweet(info)); // optimistic
//     saveLikeToggle(info)
//       .catch(e => {
//         console.warn('saveToggleTweet did not work: ', e);
//         dispatch(toggleTweet(info));
//         alert('Interaction with the tweet failed !');
//       });
//   }
// }