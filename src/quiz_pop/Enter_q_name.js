import React from 'react'
import "./Css/enter_q_name.css";
import {useNavigate}  from 'react-router-dom'

function Enter_q_name() {
  let navigate = useNavigate();
   const createpage = e => {
    e.preventDefault();
    navigate('/create_q');
   }
    const back = e => {
        e.preventDefault();
        navigate('/cc_dash');
    }
  return (
     <>
    <div className="box">
        <div className='EQuiz_input'>
            <input className='EQuiz' type="text" placeholder='Enter Quiz Name..' name='Enter_q_name'/>
        </div>
        <div>
            <input className='EQuiz' type="text" placeholder='Enter Quiz Description' name='Enter_q_des'/>
        </div>
    </div>
    <div className='EQ_input'> 
        <button className='EQ_btn' onClick={createpage}>Create</button>
        <button className='EQ_btn' onClick={back}>Back</button>
    </div>
    </>
  )
}

export default Enter_q_name;