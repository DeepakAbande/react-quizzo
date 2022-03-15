import React from 'react'
import "./forgot_pass.css";

function Forgot_pass() {
  return (
    <div className='Container'>
    <div className='head'>
      <h3>Forgot password? Don't worry</h3>
      
      <input type="text" className='forgot_pass_in' placeholder='Enter your mail' name='forget_pass_mail' />
    </div>
    <div className='btn_div'>
    <button className="btn"type="submit" name='submit_forgot_pass'>Submit</button>
    </div>
    </div>
  )
}

export default Forgot_pass;