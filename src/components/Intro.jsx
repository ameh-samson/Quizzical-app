export default function Intro(props) {
  return (
    <div className="intro-page">
      <h1 className="intro-header">Quizzical</h1>
      <h2 className="intro-sub-header">
        Are you ready to test your intelligence?
      </h2>
      <button className="btn" onClick={props.startGame}>
        Start quiz
      </button>
    </div>
  );
}
