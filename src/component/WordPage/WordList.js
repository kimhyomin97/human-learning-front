import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";

function WordList({ match }) {
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
      <div>단어 추가하기</div>
      <div>단어 수정하기</div>
      <div>단어 삭제하기</div>
      <div>
        <a href="/word/wordmemo/toeic">단어 외우기</a>
      </div>
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

export default WordList;
