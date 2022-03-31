import React from "react";
import "./aprque.css";

function Aprque() {
  return (
    <>
      <div className="top_div">
        <div className="quiz_name">
          <h3>Quiz Name</h3>
        </div>
        <div className="time">
          <h3>Time</h3>
        </div>
      </div>
      <section>
        <div className="que_container">
          {/* <h2>Question</h2> */}
          <div className="inner_container">
            <h3>Question no</h3>
            {/* <label htmlFor="h2">__</label> */}
            <h3>Max Points</h3>
            {/* <label className='point_label' htmlFor="h3">__</label> */}

            {/* <div className="que_win">
              <h2>Question will appear here</h2>
            </div> */} 
          </div>
          <hr />
          <div className="que_box">
            <div className="que_box_1">
              Questions Will Appear Here
            </div>
            <div className="img_view">
              <img className="q_img" src="https://www.colorcombos.com/images/colors/999999.png" alt="" />
            </div>
          </div>
          <div className="ans_box">
            {/* <button className="button1">Enter Answer Here</button> */}
            Answer
            <div className="que_box_2">
              Level:Easy
            </div>
          </div>

        </div>
        <div className="mapping">
          <h2>Mapping</h2>
        </div>
        <div>
        </div>
        <div className="bottom_buttons">
          <button className="bottom_btns endbtn">Reject</button>
          <button className="bottom_btns">Approve</button>
        </div>
      </section>
    </>
  );
}

export default Aprque;
