import { useState, useEffect } from "react";
import http from "../api/http";
import WordPage from "./WordPage";

function Header() {
  return (
    <>
      <header>
        this is header
        <a href="/login">
          <div>login</div>
        </a>
      </header>
    </>
  );
}

export default Header;
