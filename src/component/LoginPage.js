import axios from "axios";
import { useState, useEffect } from "react";
import http from "../api/http";

function LoginPage() {
  const [loginId, setLoginId] = useState();
  const [loginPw, setLoginPw] = useState();

  const handleInputId = (e) => {
    setLoginId(e.target.value);
  };

  const handleInputPw = (e) => {
    setLoginPw(e.target.value);
  };

  const loginClick = () => {
    http.get("/user/login").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <form>
        <label>ID : </label>
        <input
          type="text"
          name="loginId"
          value={loginId}
          onChange={handleInputId}
        ></input>
        <label>PW : </label>
        <input
          type="password"
          name="loginPw"
          value={loginPw}
          onChange={handleInputPw}
        ></input>
        <button type="button" onClick={loginClick}>
          로그인
        </button>
      </form>
    </>
  );
}

export default LoginPage;
