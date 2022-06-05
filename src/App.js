// import React, { useState, useEffect, Navigate, useLocation } from "react";
// import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./component/Header";
// import LandingPage from "./component/LandingPage";
// import LoginPage from "./component/LoginPage";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// // Material Kit 2 React themes
// import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";

// // Material Kit 2 React routes
// import routes from "routes";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // fetch 부분
//   }, []);

//   const { pathname } = useLocation();

//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return (
//           <Route
//             exact
//             path={route.route}
//             element={route.component}
//             key={route.key}
//           />
//         );
//       }

//       return null;
//     });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Routes>
//         {getRoutes(routes)}
//         <Route path="/presentation" element={<Presentation />} />
//         <Route path="*" element={<Navigate to="/presentation" />} />
//       </Routes>
//     </ThemeProvider>
//     // <BrowserRouter>
//     //   <Header />
//     //   <Routes>
//     //     {/* v6 문법 적용 */}
//     //     <Route exact path="/" element={<LandingPage />} />
//     //     <Route exact path="/login" element={<LoginPage />} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// export default App;
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
  );
}
