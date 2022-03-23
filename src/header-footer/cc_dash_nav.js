import React from "react";
import { Link } from "react-router-dom";
import "./que_nav.css";

function Que_page() {
  return (
    <>
      <nav>
        <div className="icon"><Link to={''}>LOGO</Link></div>
        <ol>
          <li>
            <div className="view_q">
              <div class="dropdown">
                <button class="dropbtn">
                  {" "}
                  Create Quiz{" "}
                </button>
                <div class="dropdown-content">
                  <Link to={'/public_q'}>Public</Link>
                  <Link to={''}>Private</Link>
                </div>
              </div>
            </div>
            {/* <Link to={'/prac'} className="view_q">
              {" "}
              Create Quiz{" "}
            </Link> */}
          </li>
          <li>
            <div className="ent">
              <Link to={'/entercode'} className="enter_c">
                {" "}
                View Quizes{" "}
              </Link>
            </div>
          </li>
        </ol>
        <div class="dropdown">
          <button class="dropbtn">
            <img
              className="profile_img"
              src="https://pixlok.com/wp-content/uploads/2021/02/profile-Icon-SVG.jpg"
              alt=""
            />
          </button>
          <div class="dropdown-content">
            <Link to={'/prof'}>Profile</Link>
            <Link to={''}>Leaderboard</Link>
            <Link to={'/'}>LOgout</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Que_page;
