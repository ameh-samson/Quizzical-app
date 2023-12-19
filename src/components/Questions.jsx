export default function Question(props) {
  const incorrectAnswers = props.questions.incorrect_answers.map(
    (incorrectAnswer, index) => {
      return <li key={index}> {incorrectAnswer} </li>;
    }
  );
  console.log(props.questions);
  return (
    <div className="questions-section">
      <h2 className="question-title">{props.questions.question}</h2>
      <ul className="question-options">
        {incorrectAnswers}
        <li>{props.questions.correct_answer}</li>
      </ul>
    </div>
  );
}
