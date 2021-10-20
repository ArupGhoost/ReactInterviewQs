import React, {useContext, useState} from 'react';
import mainContext from '../Context';

const Question5 = () => {

    const {answerObject} = useContext(mainContext);

    const[val5, setVal5] = useState(false)

    return (
        <>
     <div className='all'>
        <div className='div-1' onClick={() => {
              setVal5(!val5);
          }}>
         <div className='div-qs-1'>
          <p >What is  React-Hooks?</p>
          <div className='symbol'>
          <p>&#11015;</p>
          </div>
        </div> 
     
          
    </div>
    <div className='div-ans-1'>
              {val5 ? <p id='rr' className='ans-1'>{answerObject.e}</p> : ''}
          </div>
         </div>       
        </>
    )
}

export default Question5;
