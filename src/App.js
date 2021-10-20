import React , { useState }from 'react';
import './App.css';
import mainContext from './Context';
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import { answerObject } from './mainObject';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';



function App() {

  const[val, setVal] = useState(false);

  return (
    <div className="App">
        <div>
            <h1 className='header'>React Interview Questions</h1>

             <mainContext.Provider value={{answerObject, val, setVal}}>
               <Question1 />
               <Question2 />
               <Question3 />
               <Question4 />
               <Question5 />
               <Question6 />
              </mainContext.Provider>
              
        </div>
    </div>
  );
}

export default App;
