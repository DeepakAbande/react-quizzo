import React from "react";
import "./card.css";
import ACard from "./ACard";

function Apdash() {
  return (

    // ----------------App-Back: complete div class of Cards----------------
    <>
    <div className="App-back">
      {/* ----------------Parent-1: Part of upper two cards -------------------- */}
      <div className="Parent1">
        <ACard/>
        <ACard/>
      </div>

      {/* ----------------Parent-2: Part of below/lower two cards -------------------- */}
      <div className="Parent2">
        <ACard/>
        <ACard/>
      </div>
    </div>
    </>
  );
}

export default Apdash;