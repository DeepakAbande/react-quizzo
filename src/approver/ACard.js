import React from "react";
import "./card.css";
import { useNavigate } from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa';
import { minHeight, minWidth } from "@mui/system";



function ACard() {
  let navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    navigate('/aprque');
  }
  let styles = {color:"green",minHeight:"5vh",minWidth:"10vw" };
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
            {/* <button type="button"  onClick={handleClick} className="proplay">
                Play
              </button> */}
          </div>
          <div className="aprdes">
            <FaCheckCircle style={styles}></FaCheckCircle>
            <br/>
            <h3 className="aprh3">Approved</h3>
            <br/>
            <button type="button"  onClick={handleClick} className="view">
                View
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ACard;