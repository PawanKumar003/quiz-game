import React, { useState, useEffect } from "react";
import "./page.css";
import quizData from "../data/quzedata";
import Question from "./Question";
import Result from "./Result";
import "./result.css";

const Page = (props) => {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [validtext, setValidtext] = useState("");
  const [showErrormsg, setShowErrormsg] = useState();

  const getScore = (score1) => {
    setShowErrormsg(score1);
    setValidtext("");

    setScore(score + score1);
  };

  const resultHandler = () => {
    if (showErrormsg >= 0) {
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
    } else {
      setValidtext("Please click one button");
    }
  };

  const showData = (val) => {
    setShow(val);
    setScore(0);
  };

  useEffect(() => {
    setShowErrormsg();
  }, [setValidtext]);

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
        {score === 0 ? validtext : ""}

        {show ? <Result showData={showData} text={text} score={score} /> : null}
      </div>
    </div>
  );
};

export default Page;
