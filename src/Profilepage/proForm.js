import React from 'react';
import "./css/pro.css";
import {Link} from 'react-router-dom';


const ProForm = () => {
    return (
        <>
            <div className="profbg">
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
                            <td className="llable">First Name </td>
                            {/* <td> <input className="signInput" type="text" name="fname" id="fname" autoComplete="off" /></td> */}
                            <td id="fname"> <b> Deepak</b></td>
                            <td>Last Name</td>
                            {/* <td><input className="signInput" type="text" name="lname" id="lname" autoComplete="off" /></td> */}
                            <td id="fname"><b>Abande</b></td>
                        </tr>

                        <tr>
                            <td className='llable' >Email ID </td>
                            {/* <td> <input className="signInput" type="text" name="email" id="email" autoComplete="off" /></td> */}
                            <td id="fname"><b>deepakabande26@gmail.com</b></td>
                            <td>Phone No</td>
                            {/* <td><input className="signInput" type="text" name="phone" id="phone" autoComplete="off" /></td> */}
                            <td id="fname"><b>9112820800</b></td>
                        </tr>

                        <tr>
                            <td className='llable'>Date of Birth </td>
                            {/* <td> <input className="signInput" type="date" name="Date" id="Date" /></td> */}
                            <td id="fname"><b>26/05/2001</b></td>
                            <td>Gender</td>
                            <td>
                            <td id="fname"><b>Male</b></td>
                                {/* <input className="signInput" type="radio" name="Gender" id="male" />Male
                                <input className="signInput" type="radio" name="Gender" id="female" />Female */}
                            </td>
                        </tr>


                    </table>

                </div>
            </form>
            </div>

        </>
    )
}

export default ProForm
