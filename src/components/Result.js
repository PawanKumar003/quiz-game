import React, { useState } from "react";
import "./result.css";

const Result = (props) => {
  const [rsultHide, setResultHide] = useState(true);

  const { showData } = props;

  const playHandler = () => {
    if (props.score >= 0) {
      setResultHide(false);
      showData(false);
    }
  };

  return (
    <>
      {rsultHide ? (
        <div className="mainresult">
          <div className="resultText">
            <p>
              {props.score === 5 ? props.text + " Fantastic" : "Avarage"}
              &#10024;
            </p>
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
