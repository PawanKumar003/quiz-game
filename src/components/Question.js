import React, { useState } from "react";

const Question = (props) => {
  const [status, setStatus] = useState(true);
  const [btnName, setBtnName] = useState("");
  const { getScore } = props;

  const clickHandler = (e) => {
    getScore(e.target.dataset.answerId == props.data.answer ? 1 : 0);
    setStatus(false);
    setBtnName(e.target.innerText);
    e.target.disabled = "true";
    console.log(e.target.innerText);
  };

  return (
    <>
      <div className="bodyContain">
        <p className="pTag">{props.data.question} </p>
        <div className="btnDiv">
          {status ? (
            Object.entries(props.data.options).map(([key, value]) => (
              <button
                onClick={clickHandler}
                className="btn"
                data-answer-id={key}
              >
                {value}
              </button>
            ))
          ) : (
            <button className="btn" disabled>
              {btnName}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Question;
