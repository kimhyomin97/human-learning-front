import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetch 부분
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* v6 문법 적용 */}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
