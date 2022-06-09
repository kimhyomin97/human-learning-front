import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";
import WordList from "./component/WordPage/WordList";
import WordMemo from "./component/WordPage/WordMemo";
import WordPage from "./component/WordPage/WordPage";

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
        <Route exact path="/word" element={<WordPage />} />
        <Route exact path="/word/wordlist/:target" element={<WordList />} />
        <Route exact path="/word/wordmemo/:target" element={<WordMemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
