import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
  const skippedAns = Math.round(
    (userAnswers.filter((ans) => ans === null).length / userAnswers.length) *
      100
  );
  const correctAns = Math.round(
    (userAnswers.filter((ans, ind) => ans === QUESTIONS[ind].answers[0])
      .length /
      userAnswers.length) *
      100
  );
  const wrongAns = 100 - skippedAns - correctAns;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAns}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAns}%</span>
          <span className="text">correctly</span>
        </p>
        <p>
          <span className="number">{wrongAns}%</span>
          <span className="text">incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
