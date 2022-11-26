import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";
import "./public/Word.css";

function WordMemo({ match }) {
  const params = useParams();
  const [word, setWord] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [visible, setVisible] = useState(false);

  let sessionStorage = window.sessionStorage;
  const loginInfo = JSON.parse(sessionStorage.getItem("loginInfo"));

  useEffect(() => {
    // fetch 부분
    http
      .get(`/word/wordlist?target=${params.target}&checkid=${loginInfo.userid}`)
      .then((res) => {
        console.log(res.data);
        setWord(res.data);
      });
    // eslint-disable-next-line
  }, []);

  const leftBtn = () => {
    setPageNum(pageNum - 1);
  };

  const rightBtn = () => {
    setPageNum(pageNum + 1);
  };

  const visibleBtn = () => {
    setVisible(!visible);
  };

  const checkWordBtn = () => {
    http
      .post(`/word/wordcheck`, {
        wordid: word[pageNum].id,
        userid: loginInfo.userid,
      })
      .then((res) => {
        setWord(
          word.map((item) =>
            item.eng === word[pageNum]?.eng
              ? { ...item, userid: loginInfo.userid }
              : item
          )
        );
      });
  };

  return (
    <>
      {/* 카드 형식(한장씩 넘긴다) */}
      {pageNum + 1} / {word.length}
      <br />
      {word[pageNum]?.eng}
      {word[pageNum]?.userid != null ? <span>✔</span> : <></>}
      <br />
      <input type="text" /> <button onClick={visibleBtn}>확인</button>
      <br />
      {visible === true ? (
        <>
          {word[pageNum]?.kor}
          {word[pageNum]?.userid != null ? (
            <></> // 체크 해제하는 기능 구현하면 된다 -> db에 delete where 활용하면 된다
          ) : (
            <button onClick={checkWordBtn}>체크</button>
          )}
        </>
      ) : (
        <></>
      )}{" "}
      <br />
      {pageNum > 0 ? <button onClick={leftBtn}>왼쪽</button> : <></>}
      {pageNum < word.length ? (
        <button onClick={rightBtn}>오른쪽</button>
      ) : (
        <></>
      )}
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
