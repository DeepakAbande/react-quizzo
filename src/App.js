import "./App.css";
import Footer from "./header-footer/footer"
import Header from "./header-footer/Headerslidepage";
import Jheader from "./joinwithcode/HeaderJoin"
import Lheader from "./login/Headerlogin";
import React from "react";
import Comp from "./joinwithcode/joinwithcode";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Regform from "./register/Regform";
import Landingpage from "./carousel/landingpage";
import LogForm from "./login/LogForm";
// import Head from "./components/Head";
import Progress from "./components/Progress";
// import { useState } from "react";

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
            <Jheader />
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
            <Lheader />
            <LogForm />
          </>
        }>
        </Route>
        <Route path="/dash" element={
          <>
            <Header/>
            <Progress />
          </>
        }>

        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
