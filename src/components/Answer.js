import { FIRST_ANSWER, SECOND_ANSWER } from './Question';

export default function Answer (props) {
  const { question, author, answer } = props;
  const { name, avatarURL } = author; 
  return(
    <div className="answer-brief-whole">
      <h3>{name} asks:</h3>
      <div className="question-brief">
        <img src={avatarURL} alt="author's avatar"></img>
        <div className="question-brief-questions">
          <span>Would you rather</span>
          <p>{answer === FIRST_ANSWER ? '(your answer) ' : ''}
            {question.optionOne.text}</p>
          <p>OR</p>
          <p>{answer === SECOND_ANSWER ? '(your answer) ' : ''}
            {question.optionTwo.text}</p>
          <p>?</p>
        </div>
      </div>
    </div>
  )
}