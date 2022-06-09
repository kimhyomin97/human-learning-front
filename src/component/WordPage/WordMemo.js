import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";

function WordMemo({ match }) {
  const params = useParams();
  const [word, setWord] = useState([]);
  useEffect(() => {
    // fetch 부분
    http.get(`/word/${params.target}`).then((res) => {
      //   console.log(res);
      setWord(res.data);
    });
  }, []);

  return (
    <>
      <div>단어 외우기 페이지</div>
      {word.map((item, index) => {
        return (
          <div key={index}>
            {item.eng} : <input type="text" />
          </div>
        );
      })}
    </>
  );
}

export default WordMemo;
