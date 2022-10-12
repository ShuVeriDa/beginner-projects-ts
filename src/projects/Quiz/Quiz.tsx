import './index.scss';
import {useState} from "react";
import {Game} from "./components/Game";
import {questions} from "./questions";
import {Result} from "./components/Result";

export const Quiz = () => {
  const [step, setStep] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)

  const question = questions[step]

  const onClickVariant = (correct: number) => {
    setStep(step + 1)

    if (question.correct === correct) {
      setCorrectAnswer(correctAnswer + 1)
    }
  }

  const restartQuiz = () => {
    setStep(0)
    setCorrectAnswer(0)
  }

  return (
    <div className="App">
      {questions.length !== step
        ? <Game question={question}
                step={step}
                onClickVariant={onClickVariant}/>

        : <Result correctAnswer={correctAnswer} restartQuiz={restartQuiz}/>
      }
    </div>
  );
}
