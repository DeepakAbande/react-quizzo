import "./App.css";
import Footer from "./header-footer/footer"
import Header from "./header-footer/Headerslidepage";
import React from "react";
import Comp from "./joinwithcode/joinwithcode";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Regform from "./register/Regform";
import Landingpage from "./carousel/landingpage";
import LogForm from "./login/LogForm";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Landingpage></Landingpage>
          </>
        }>
        </Route>
        <Route path="/entercode" element={
          <>
            <Header />
            <Comp ></Comp>
          </>}>
        </Route>
        <Route path="/register" element={
          <>
            <Header />
            <Regform ></Regform>
          </>
        }>

        </Route>
        <Route path="/login" element={
          <>
            <Header />
            <LogForm />
          </>
        }>
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
