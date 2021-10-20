import React, {useContext, useState} from 'react';
import mainContext from '../Context';

const Question3 = () => {
 
    const {answerObject} = useContext(mainContext);

    const[val3, setVal3] = useState(false)

    return (
        <>
             <div className='all'>
        <div className='div-1' onClick={() => {
              setVal3(!val3);
          }}>
         <div className='div-qs-1'>
          <p >What is React-JSX?</p>
          <div className='symbol'>
          <p>&#11015;</p>
          </div>
        </div> 
     
          
    </div>
    <div className='div-ans-1'>
              {val3 ? <p id='rr' className='ans-1'>{answerObject.c}</p> : ''}
          </div>
         </div>   
        </>
    )
}

export default Question3
