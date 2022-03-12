
////----------------------THE LOGIN FORM I.E., CARD CONTAINING EMAIL, PASSWORD, FORGOT, SUBMIT, JOPIN WITH CODE AND SIGNUP---------------------



import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import "./logform.css";

//------------------FUNCTION FOR LOFIN FORM/CARD-------------------
const LogForm = () =>
{
    let navigate=useNavigate();
    return (

        <div className="container">
        <form>
            

             <h3>Welcome To The Login Page</h3 >
                <p>Sign In to your Account</p>
                
                <div>

                {/* ------------------------------------EMAIL FIELD --------------------------------------------*/}
                <div className="field">
                    <input type="username" placeholder="username" name="username" id="username" />
                </div>
                
                {/* -------------------------------THE CODE BELOW CONTAINS PASSWORD AND FORGOT YOUR PASSWORD FIELDS---------------------------- */}
                <div className="field">
                    <input type="password" placeholder="Password" name="password" id="password"/>
                </div>
                <Link to={''} href="#" className="forgot">Forgot your Password?</Link>
                <br></br>
                <br></br>
                
               {/* ------------------JOIN WITH CODE AND SUBMIT BUTTONS BELOW =--------------------- */}
                <button className="button1" onClick={()=>{navigate('/')}}>Sign In</button>
                    <p>OR</p>
                <button className="button2" onClick={()=>{navigate('/entercode')}}>Join With Code</button>

                {/* ------------------------SIGN UP LINK BELOW-------------------------------------- */}
                
               <span className='span'>Don't Have An Account? <Link to={"/register"} href="#" className='sign'>Sign up </Link></span>
               
            </div>
        </form>
        </div>


    )
    

}

export default LogForm;