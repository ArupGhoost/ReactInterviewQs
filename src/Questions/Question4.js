import React, {useContext, useState} from 'react';
import mainContext from '../Context';

const Question4 = () => {
   
    const {answerObject} = useContext(mainContext);

    const[val4, setVal4] = useState(false)

     
    return (
        <>
                     <div className='all'>
        <div className='div-1' onClick={() => {
              setVal4(!val4);
          }}>
         <div className='div-qs-1'>
          <p >What is State and Props?</p>
          <div className='symbol'>
          <p>&#11015;</p>
          </div>
        </div> 
     
          
    </div>
    <div className='div-ans-1'>
              {val4 ? <p id='rr' className='ans-1'>{answerObject.d}</p> : ''}
          </div>
         </div>     
        </>
    )
}

export default Question4
