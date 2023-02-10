import React, { useEffect, useState } from "react";
import "./result.css";

const Result = (props) => {
  const [rsultHide, setResultHide] = useState(true);

  // const [val, setVal] = useState(0);

  const { showData } = props;

  const playHandler = () => {
    if (props.score) {
      setResultHide(false);
      showData(rsultHide);
    }
  };

  return (
    <>
      {rsultHide ? (
        <div className="mainresult">
          <div className="resultText">
            <p>{props.score === 5 ? props.text + " Fantastic" : "Avarage"}</p>
            <p>Here is your result {props.score}/5 !!!</p>
          </div>
          <button onClick={playHandler} className="btn1">
            Play Again
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Result;
