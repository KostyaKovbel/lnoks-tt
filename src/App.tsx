import React from 'react';
import './App.scss';
import { Answers } from './Components/Answers/Answers';

function App() {
  return (
    <div className="test">
      <div className='test__task'>
        <div className='test__info'>
          <div className='test__number'>1.5</div>
          <div className='test__title-place'>
            <h3 className='test__title'>Proszę napisać poprawną formę przymiotnika😊.</h3>
            <p className='test__title-translate'>(Напишіть правильну форму прикметника)</p>
          </div>
        </div>
        
        <div className='test__example'>
          <p className='test__example-title'>Przykład:&nbsp;</p> 
          <p className='test__example-info'>
            Książka jest
            <span className='test__example-answer'>
            &nbsp;lepsza&nbsp;
            </span>
            niż film.
          </p>
        </div>
      </div>

      <Answers />
    </div>
  );
}

export default App;
