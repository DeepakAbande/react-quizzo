import "./App.css";
import Footer from "./header-footer/footer"
import Header from "./header-footer/Headerslidepage";
import Jheader from "./joinwithcode/HeaderJoin"
import Lheader from "./login/Headerlogin";
import React from "react";
import Comp from "./joinwithcode/joinwithcode";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Regform from "./register/Regform";
import Landingpage from "./carousel/landingpage";
import LogForm from "./login/LogForm";
import Dheader from "./components/heading";
import Progress from "./components/Progress";
import For_pass from "./forgot_pass/Forgot_pass";

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
            <Dheader/>
            <Progress />
          </>
        }>

        </Route>
          <Route path="/for_pass" element={
            <>
            <Header/>
            <For_pass></For_pass>
            </>

          }>
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
