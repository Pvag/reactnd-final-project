import { OPTION_ONE, OPTION_TWO } from './Question';

function getStatsForQuestion(question) {
  const votes1 = question.optionOne.votes.length;
  const votes2 = question.optionTwo.votes.length;
  const total = votes1 + votes2;
  return {
    optionOne: {
      nVotes: votes1,
      percentage: Math.round(votes1*100/total),
    },
    optionTwo: {
      nVotes: votes2,
      percentage: Math.round(votes2*100/total),
    },
    nVotes: total,
  }
}

export default function Answer (props) {
  const { question, author, answer } = props;
  const { name, avatarURL } = author; 
  const stats = getStatsForQuestion(question);
  return(
    <div className="answer-brief-whole">
      <h3>{name} asked:</h3>
      <div className="question-brief">
        <img src={avatarURL} alt="author's avatar"></img>
        <div className="question-brief-questions">
          <span>Would you rather</span>
          <p>{answer === OPTION_ONE ? '(your answer) ' : ''}
            {question.optionOne.text}</p>
          <p>- chosen by {stats.optionOne.percentage}% of users (
            {stats.optionOne.nVotes} out of {stats.nVotes} voted this)</p>
          <p>OR</p>
          <p>{answer === OPTION_TWO ? '(your answer) ' : ''}
            {question.optionTwo.text}</p>
          <p>- chosen by {stats.optionTwo.percentage}% of users (
            {stats.optionTwo.nVotes} out of {stats.nVotes} voted this)</p>
          <p>?</p>
        </div>
      </div>
    </div>
  )
}