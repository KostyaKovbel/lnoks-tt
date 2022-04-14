import { useState } from "react";
import { TaskType } from "../../types/Task";
import classnames from "classnames";
import './Test.scss'

type Props = {
  test: TaskType,
};

export const Test: React.FC<Props> = ({ test }) => {
  const { firstPart, secondPart, answer, task } = test;

  const [countUserTry, setCountUserTry] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [isUserPass, setIsUserPass] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isUserPass ||countUserTry >= 3) {
      event.preventDefault();
      return;
    }
  
    setIsWrong(false);
    setQuery(event.target.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (isUserPass || countUserTry >= 3) {
      return;
    }

    if (answer.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      setIsCorrect(true);
      setIsUserPass(true);
      setCountUserTry(prevcountUserTry=> prevcountUserTry+= 1);
      return;
    }

    setCountUserTry(prevcountUserTry=> prevcountUserTry+= 1);

    if (countUserTry >= 2) {
      setIsCorrect(true);
      setQuery(answer);
    }
  
    setIsWrong(true);
  }

  return (
    <form 
      className="task"
      onSubmit={onSubmit}
    >
      <section className="task__sentence">
        💛 
        {firstPart}
        &nbsp;
        <span className="task__question">
          {task}
        </span>
        &nbsp;
        <input
          type="text"
          value={query}
          onChange={onChange}
          className={classnames
            (
              "task__input",
              {
                "task--error": isWrong,
                "task--correct": isCorrect,
              }
            )}
        />
        <div className="task__icons">
          <div 
            className={classnames(
              "task__icon",
              {
                "task__icon--correct": isUserPass && countUserTry > 2,
                "task__icon--error": !isUserPass && countUserTry > 2,
              }
            )} 
          />
          <div 
            className={classnames(
              "task__icon",
              {
                "task__icon--correct": isUserPass && countUserTry > 1,
                "task__icon--error": !isUserPass && countUserTry > 1,
              }
            )} 
          />
          <div 
            className={classnames(
              "task__icon",
              {
                "task__icon--correct": isUserPass && countUserTry > 0,
                "task__icon--error": !isUserPass && countUserTry > 0,
              }
            )} 
          />
        </div>
        &nbsp;
        {secondPart}
      </section>
    </form>
  )
}