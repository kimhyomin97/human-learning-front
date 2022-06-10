import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";
import "./public/Word.css";

function WordMemo({ match }) {
  const params = useParams();
  const [word, setWord] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    // fetch 부분
    http.get(`/word/${params.target}`).then((res) => {
      //   console.log(res);
      setWord(res.data);
    });
  }, []);

  return (
    <>
      {/* 카드 형식(한장씩 넘긴다) */}
      {console.log(word[1])}
      {/* 아래는 리스트 형식 */}
      {/* <table>
        <th>영어</th>
        <th>한글</th>
        {word.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <span className="word_eng">{item.eng}</span>
              </td>
              <td>
                <input type="text" class="word_kor" />
              </td>
            </tr>
          );
        })}
      </table> */}
    </>
  );
}

export default WordMemo;
