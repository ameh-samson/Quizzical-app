import React, { useState } from "react";

export default function Question(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const incorrectAnswers = props.questions.incorrect_answers.map(
    (incorrectAnswer, index) => (
      <li key={index} onClick={() => handleOptionClick()}>
        {incorrectAnswer}
      </li>
    )
  );

  const correctAnswer = (
    <li
      key={props.questions.correct_answer}
      onClick={() => handleOptionClick()}
    >
      {props.questions.correct_answer}
    </li>
  );

  function handleOptionClick() {
    console.log("option clicked");
  }

  return (
    <div className="questions-section">
      <h2 className="question-title">{props.questions.question}</h2>
      <ul className="question-options">
        {incorrectAnswers}
        {correctAnswer}
      </ul>
    </div>
  );
}
