import axios from "axios";
import { useState, useEffect } from "react";
import http from "../api/http";

function LoginPage() {
  const [loginId, setLoginId] = useState();
  const [loginPw, setLoginPw] = useState();
  const [loginEmail, setLoginEmail] = useState("test@naver.com");
  const handleInputId = (e) => {
    setLoginId(e.target.value);
  };

  const handleInputPw = (e) => {
    setLoginPw(e.target.value);
  };

  const loginClick = () => {
    http
      .post("/user/login", {
        userid: loginId,
        userpw: loginPw,
        email: loginEmail,
      })
      .then((res) => {
        if (res.data == null) {
          console.log("로그인 오류 구현");
        } else if (res.data.userid == loginId) {
          console.log("로그인 성공 구현");
          // 로그인 정보 redux에 저장 or session에 저장
          // 홈페이지 or 랜딩페이지로 페이지 이동 -> history 사용?
        }
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
        {/* <button type="submit">로그인</button> */}
        <button type="button" onClick={loginClick}>
          로그인
        </button>
      </form>
    </>
  );
}

export default LoginPage;
