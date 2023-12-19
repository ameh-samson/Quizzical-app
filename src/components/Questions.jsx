export default function Question(props) {
  console.log(props.questions);
  return (
    <div className="questions-section">
      <h2 className="question-title">{props.questions.question}</h2>
      <ul className="question-options">
        <li>Adiós</li>
        <li>Adiós</li>
        <li>Adiós</li>
        <li>Adiós</li>
      </ul>
    </div>
  );
}
