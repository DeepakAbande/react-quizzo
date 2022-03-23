import React from 'react';
import "./css/pro.css";
import {Link} from 'react-router-dom';


const ProForm = () => {
    return (
        <>

            <div className="sidebar">
                <div className="profile">
                    <img className="pic" alt='img' src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ></img>
                    <h5 className="user">User name</h5>
                </div>

                <div className="menu">
                    <h4><Link className="one" to={''}>Edit profile</Link></h4><br />
                    <h4><Link className="one" to={''}>Progess</Link></h4><br />
                    <h4><Link className="one" to={''}>Delete account</Link></h4><br />
                    <h4><Link className="one" to={''}>Logout</Link></h4>
                </div>
            </div>

            <form className="profform" >
                <div>
                    <table className="proTable">
                        <tr>
                            <td >First Name </td>
                            <td> <input className="signInput" type="text" name="fname" id="fname" autoComplete="off" /></td>
                            <td>Last Name</td>
                            <td><input className="signInput" type="text" name="lname" id="lname" autoComplete="off" /></td>
                        </tr>

                        <tr>
                            <td >Email ID </td>
                            <td> <input className="signInput" type="text" name="email" id="email" autoComplete="off" /></td>
                            <td>Phone No</td>
                            <td><input className="signInput" type="text" name="phone" id="phone" autoComplete="off" /></td>
                        </tr>

                        <tr>
                            <td >Date of Birth </td>
                            <td> <input className="signInput" type="date" name="Date" id="Date" /></td>
                            <td>Gender</td>
                            <td>
                                <input className="signInput" type="radio" name="Gender" id="male" />Male
                                <input className="signInput" type="radio" name="Gender" id="female" />Female
                            </td>
                        </tr>

                        <tr>
                            <td > Password </td>
                            <td> <input className="signInput" type="password" name="pwd" id="pwd1" value="Pankaj" /></td>
                            <td>Show Password</td>
                            <td><input className="signInput" type="Checkbox" name="pwd" id="pwd2" onclick="myFunction()" /></td>


                        </tr>




                    </table>

                    <div>
                        <button className='profileSubmit'>Save</button>
                    </div>

                </div>
            </form>

        </>
    )
}

export default ProForm
