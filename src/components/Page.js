import React, { useState, useEffect, useRef } from "react";
import "./page.css";
import quizData from "../data/quzedata";
import Question from "./Question";
import Result from "./Result";
import "./result.css";

const Page = (props) => {
  //const [count, setCount] = useState(0);
  const [show, setAtrrval] = useState(true);

  return (
    <div className="mainPage">
      <div className="containpage">
        <div className="gamestart">Game Start</div>
        {quizData.map((data) => (
          <Question data={data} key={data.id} />
        ))}

        <button className="btn1" style={{ marginTop: "40px" }}>
          Submit
        </button>

        <Result />
      </div>
    </div>
  );
};

export default Page;
