import React from 'react'
import "./css/create_que.css";

function Create_que() {
  return (
    <>
    <div className="top_div"> 
      <div className="quiz_name">
        <input type="text" name="que_no" id="" placeholder='Quiz No' className='ique_no' />
      </div>
      <div className="time">
        <input className='settime' type="text" placeholder='Set Time' name='SetTime' />
      </div>
    </div>
    <section>
      <div className="que_container">
        {/* <h2>Question</h2> */}
        <div className="inner_container">
          <h2>Question no</h2>
          {/* <label htmlFor="h2">__</label> */}
          <h3>Max Points</h3>
          <select name="max_points" id="maxp">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              </select>
          {/* <label className='point_label' htmlFor="h3">__</label> */}

          {/* <div className="que_win">
            <h2>Question will appear here</h2>
          </div> */}
        </div>
        <hr  />
        <div className="que_box">
          <div className="que_box_1">
            <input className='Enter_que' type="text" placeholder='Enter the question' name='Enter_question' />
          </div>
          <div className="img_view">
            {/* <img className="q_img"src="https://www.colorcombos.com/images/colors/999999.png" alt="" /> */}
            <input type="file" name='input_img' className='input_img'accept="image/png, image/jpeg"></input>
          </div>
        </div>
          <div className="ans_box">
            {/* <button className="button1">Enter Answer Here</button> */}
            <input type="text" className="answerform" placeholder="Enter your answer here" name="answer"/>
          <div className="que_box_2">
            <div className="buttongroup">
            <button className="button_ans" name='mapping'>Mapping</button>
            {/* <button className="button_ans">Hint</button> */}
            <input type="text" placeholder='Hint' name='hint'/>
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
        <button className="bottom_btns" name='next_btn'>Next</button>
        <button className="bottom_btns" name='clear_btn'>Clear</button>
        <button className="bottom_btns endbtn" name='EndQ_btn'>End Quiz</button>
        <button className="bottom_btns savebtn" name='SaveQ_btn'>Save Quiz</button>
        </div>
    </section>
  </>
  )
}

export default Create_que