import { useState, useEffect } from "react";
import http from "../api/http";

function WordPage() {
  const [word, setWord] = useState([]);

  useEffect(() => {
    // fetch 부분
    http.get("/word/wordall").then((res) => {
      //   console.log(res);
      setWord(res.data);
    });
  }, []);

  return (
    <>
      <div>this is Word Page</div>
      <div>wordlist : </div>
      {word.map((item, index) => {
        return (
          <div key={index}>
            {item.eng} : {item.kor}
          </div>
        );
      })}
    </>
  );
}

export default WordPage;
