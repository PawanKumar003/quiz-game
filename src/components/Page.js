import React, { useState, useEffect, useRef } from "react";
import "./page.css";
import quizData from "../data/quzedata";
import Question from "./Question";
import Result from "./Result";
import "./result.css";

const Page = (props) => {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const getScore = (score1) => {
    console.log(score1, "df");
    setScore(score + score1);
  };

  const resultHandler = () => {
    if (score) {
      setShow(true);
      switch (score) {
        case 1:
          setText("One Star");
          break;
        case 2:
          setText("Two Star");
          break;
        case 3:
          setText("Three Star");
          break;
        case 4:
          setText("Four Star");
          break;
        case 5:
          setText("Five Star");
          break;
        default:
          setText("Play Again");
      }
    }
  };

  const showData = (val) => {
    return setShow(val);
  };

  return (
    <div className="mainPage">
      <div className="containpage">
        {!show ? <div className="gamestart">Game Start</div> : null}
        {!show
          ? quizData.map((data) => (
              <Question getScore={getScore} data={data} key={data.id} />
            ))
          : null}
        {!show ? (
          <button
            onClick={resultHandler}
            className="btn1"
            style={{ margin: "30px" }}
          >
            Submit
          </button>
        ) : null}

        {show ? <Result showData={showData} text={text} score={score} /> : null}
      </div>
    </div>
  );
};

export default Page;
