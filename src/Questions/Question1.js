import React, { useContext} from 'react'
import mainContext from '../Context';



const Question1 = (props) => {
  
   
     
   const {answerObject, val, setVal } = useContext(mainContext);
 
   
    return (
        <>
        <div className='all'>
        <div className='div-1' onClick={() => {
              setVal(!val);
          }}>
         <div className='div-qs-1'>
          <p >What is React?</p>
          <div className='symbol'>
          <p>&#11015;</p>
          </div>
        </div> 
     
          
    </div>
    <div className='div-ans-1'>
              {val ? <p id='rr' className='ans-1'>{answerObject.a}</p> : ''}
          </div>
         </div> 
        </>
    )
}

export default Question1;
