import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { Provider } from "react-redux";
// import { createStore } from "redux";

// import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage"; // localStorage에 저장하고 싶은 경우
// import storageSession from "redux-persist/lib/storage/session";
// import { PersistGate } from "redux-persist/integration/react";

// const persistConfig = {
//   key: "root",
//   storageSession,
//   whitelist: ["counter"],
// };

// const USERINFO = {
//   userid: null,
//   userpw: null,
//   email: null,
// };

// function reducer(state = USERINFO, action) {
//   if (action.type === "LOGIN") {
//     // 로그인 로직 수행
//     console.log("TEST " + state);
//     return state;
//   }
//   if (action.type === "logout") {
//     // 로그아웃 로직 수행
//   }
//   return state;
// }

// let store = createStore(reducer);
// // const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
