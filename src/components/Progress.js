///--------------------Progress cards of user Dashboard-----------------------///


import React from "react";
import "./Progress.css";

function Progress() {
  return (

    // ----------------App-Back: complete div class of Cards----------------
    <div className="App-back">
      {/* ----------------Parent-1: Part of upper two cards -------------------- */}
      <div className="Parent1">
        {/* ----------------card-1: same classname for all cards  -------------------- */}
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
              <button type="button" className="proplay">
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
        <div className="card1" id="cardProgress">
          <div className="cont1">
            {/* <img src= "./"/> */}
            <h2>QUIZ NAME</h2>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="des1">
            <div className="Play">
              Quiz description<br></br>
              Duration: 3hrs<br></br>
              Level: Easy<br></br>
              <button type="button" className="proplay">
                Play
              </button>
            </div>
            
            <div className="progress blue"> 
              <span className="progress-left"> <span className="progress-bar"></span> 
            </span> 
            <span className="progress-right"> <span className="progress-bar"></span> </span>
          
            <div className="progress-value">100%</div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------Parent-2: Part of below/lower two cards -------------------- */}
      <div className="Parent2">
      <div className="card1">
          <div className="cont1">
            
            <h2>QUIZ NAME</h2>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="des1">
            <div className="Play">
              Quiz description<br></br>
              Duration: 3hrs<br></br>
              Level: Easy<br></br>
              <button type="button" className="proplay">
                Play
              </button>
            </div>
            
            <div className="progress blue"> 
              <span className="progress-left"> <span className="progress-bar"></span> 
            </span> 
            <span className="progress-right"> <span className="progress-bar"></span> </span>
          
            <div className="progress-value">100%</div>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="cont1">
            {/* <img src= "./"/> */}
            <h2>QUIZ NAME</h2>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="des1">
            <div className="Play">
              Quiz description<br></br>
              Duration: 3hrs<br></br>
              Level: Easy<br></br>
              <button type="button" className="proplay">
                Play 
              </button>
            </div>

            
            <div className="progress blue"> 
              <span className="progress-left"> <span className="progress-bar"></span> 
            </span> 
            <span className="progress-right"> <span className="progress-bar"></span> </span>
          
            <div className="progress-value">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Progress;
