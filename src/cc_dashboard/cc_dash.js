///--------------------Progress cards of user Dashboard-----------------------///

import React from "react";
import "../dashboard/Progress.css";
import Card from "./Card";

function Progress() {
  return (

    // ----------------App-Back: complete div class of Cards----------------
    <>
    <div className="App-back">
      {/* ----------------Parent-1: Part of upper two cards -------------------- */}
      <div className="Parent1">
        <Card/>
        <Card/>
      </div>

      {/* ----------------Parent-2: Part of below/lower two cards -------------------- */}
      <div className="Parent2">
        <Card/>
        <Card/>
      </div>
    </div>
    </>
  );
}

export default Progress;