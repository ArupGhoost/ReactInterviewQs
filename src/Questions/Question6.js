import React, {useContext, useState} from 'react';
import mainContext from '../Context';

const Question6 = () => {
     
    const {answerObject} = useContext(mainContext);

    const[val6, setVal6] = useState(false)

    return (
        <>
      <div className='all'>
        <div className='div-1' onClick={() => {
              setVal6(!val6);
          }}>
         <div className='div-qs-1'>
          <p >Difference between ComponentDidMount() and useEffect()?</p>
          <div className='symbol'>
          <p>&#11015;</p>
          </div>
        </div> 
     
          
    </div>
    <div className='div-ans-1'>
              {val6 ? <p id='rr' className='ans-1'>{answerObject.f}</p> : ''}
          </div>
         </div>       
        </>
    )
}

export default Question6;
