import {FC} from "react";
import {questions} from "../questions";

type ResultPropsType = {
  correctAnswer: number
  restartQuiz: () => void
}
export const Result: FC<ResultPropsType> = ({correctAnswer, restartQuiz}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
      <h2>Вы отгадали {correctAnswer} ответа из {questions.length}</h2>
      <a href="/programming/beginner-projects/public">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}