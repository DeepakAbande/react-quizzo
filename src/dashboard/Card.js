import React from "react";
import "./Progress.css";
import {useNavigate}  from 'react-router-dom'

    

function Card() {
    let navigate = useNavigate();
    const handleClick = e => {
        e.preventDefault();
        navigate('/ques');
    }
    return (
        <>
        <div className="card1">
          {/* ----------------Cont-1: For Contents inside each card -------------------- */}
          <div className="cont1">
            {/* <img src= "./"/> */}
            <h2>QUIZ NAME</h2>
            <br></br>
            <br></br>
            <br></br>
          </div>
          {/* ----------------des-1: For quiz description to one side -------------------- */}
          <div className="des1">
          
            <div className="Play">
              Quiz description<br></br>
              Duration: 3hrs<br></br>
              Level: Easy<br></br>
              {/* ----------------proplay : for play button -------------------- */}
              <button type="button"  onClick={handleClick} className="proplay">
                Play
              </button>
            </div>
            {/* ----------------For complete animation of progress circle-------------------- */}
            <div className="progress blue"> 
            {/* ----------------For lft animation of progress circle-------------------- */}
              <span className="progress-left"> <span className="progress-bar"></span> 
            </span> 
            {/* ----------------For right animation of progress circle-------------------- */}
            <span className="progress-right"> <span className="progress-bar"></span> </span>

            {/* ----------------for displaying progess value indside the circle-------------------- */}
            <div className="progress-value">100%</div>
            </div>
          </div>
        </div>
        </>
    );
}
export default Card;