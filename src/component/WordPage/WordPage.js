import { useState, useEffect } from "react";
import http from "../../api/http";

function WordPage() {
  return (
    <>
      <div>this is Word Page</div>
      {/* <a href="/word/wordlist">단어리스트로 이동</a> */}
      <a href="/word/wordlist/toeic">토익 단어리스트로 이동</a>
    </>
  );
}

export default WordPage;
