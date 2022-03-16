import React from "react";
import "./que_page.css";

function que_page() {
  return (
    <>
      <div className="top_div">
        <div className="quiz_name">
          <h2>Quiz Name</h2>
        </div>
        <div className="time">
          <h3>Time</h3>
        </div>
      </div>
      <section>
        <div className="que_container">
          {/* <h2>Question</h2> */}
          <div className="inner_container">
            <h2>Question no</h2>
            {/* <label htmlFor="h2">__</label> */}
            <h3>Max Points</h3>
            {/* <label className='point_label' htmlFor="h3">__</label> */}

            {/* <div className="que_win">
              <h2>Question will appear here</h2>
            </div> */}
          </div>
          <hr  />
          <div className="que_box">
            <div className="que_box_1">
              Questions Will Appear Here
            </div>
            <div className="img_view">
              <img className="q_img"src="https://www.colorcombos.com/images/colors/999999.png" alt="" />
            </div>
          </div>
            <div className="ans_box">
              {/* <button className="button1">Enter Answer Here</button> */}
              <input type="text" className="answerform" placeholder="Enter your answer here" name="answer"/>
            <div className="que_box_2">
              <div className="buttongroup">
              <button className="button_ans">Mapping</button>
              <button className="button_ans">Hint</button>
              <button className="button_ans">----</button>
              </div>
            </div>
            </div>
          
        </div>
        <div className="mapping">
          <h2>Mapping</h2>
          </div>
        <div>
        </div>
        <div className="bottom_buttons">
          <button className="bottom_btns">Next</button>
          <button className="bottom_btns">Clear</button>
          <button className="bottom_btns endbtn">End Quiz</button>
          </div>
      </section>
    </>
  );
}

export default que_page;
