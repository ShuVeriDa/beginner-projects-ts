import {FC} from "react";
import {questions, QuestionsType} from "../questions";

type GamePropsType = {
  step: number
  question: QuestionsType
  onClickVariant: (correct: number) => void
}
export const Game: FC<GamePropsType> = ({step, onClickVariant, question}) => {
  return (
    <>
      <div className="progress">
        <div style={{width: `${step / questions.length * 100}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => {
          return <li key={item}
                     onClick={() => onClickVariant(index)}
          >
            {item}
          </li>
        })}
      </ul>
    </>
  );
}