import React, {useContext, useState} from 'react'
import mainContext from '../Context';


const Question2 = (props) => {

    const {answerObject} = useContext(mainContext);  
    const[val2, setVal2] = useState(false);

    return (
        <>
          
          <div className='all'>
        <div className='div-1' onClick={() => {
              setVal2(!val2);
          }}>
         <div className='div-qs-1'>
          <p >What is React Virtual-DOM?</p>
          <div className='symbol'>
          <p>&#11015;</p>
          </div>
        </div> 
     
          
    </div>
    <div className='div-ans-1'>
              {val2 ? <p id='rr' className='ans-1'>{answerObject.b}</p> : ''}
          </div>
         </div> 
        
        </>
    )
}

export default Question2;
