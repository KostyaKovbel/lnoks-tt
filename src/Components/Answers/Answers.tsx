import tasksFromServer from '../../API/tasksFromServer.json';
import { TaskType } from "../../types/Task";
import { Test } from '../Test/Test';

export const Answers: React.FC = () => {
  const tests: TaskType[] = tasksFromServer;

  return (
    <div className='answers__list'>
      {tests.map(test => {
        return (
          <Test key={test.id} test={test} />
        )
      })}
    </div>
  )
}