import axios from "axios";
import { useState, useEffect } from "react";
import http from "../api/http";
// import { useSelector, useDispatch } from "react-redux";

function LoginPage() {
  // // redux login info
  // const loginInfo = useSelector((state) => state);
  // const dispatch = useDispatch();
  let sessionStorage = window.sessionStorage;

  const [loginId, setLoginId] = useState();
  const [loginPw, setLoginPw] = useState();

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
      })
      .then((res) => {
        console.log(res);
        if (res.data != null && res.data.userid != null) {
          // // 로그인 성공
          // // 리덕스에 로그인 정보 저장
          // // 홈페이지로 history push
          // loginInfo.userid = res.data.userid;
          // loginInfo.userpw = res.data.userpw;
          // loginInfo.email = res.data.email;
          // dispatch({ type: "LOGIN" });
          const loginInfo = {
            userid: res.data.userid,
            userpw: res.data.userpw,
            email: res.data.email,
          };
          sessionStorage.setItem("loginInfo", JSON.stringify(loginInfo));
          alert("로그인 성공");
          document.location.href = "/";
        } else {
          // 로그인 실패
          alert("로그인 실패");
        }
      })
      .catch((error) => {
        console.log(error);
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
