import React, { useEffect, useState } from "react";
import Page from "./Page";

const Question = (props) => {
  const [count, setcount] = useState(0);
  const [status, setStatus] = useState(false);

  const handler = (e) => {
    if (e.target.dataset.answerId == props.data.answer) {
      setStatus(e.target.dataset.answerId);
      setcount((count) => count + 1);
      //e.target.disabled = "true";
    }
  };
  console.log(count);
  return (
    <>
      <div className="bodyContain">
        <p className="pTag">{props.data.question} </p>
        <div className="btnDiv">
          {Object.entries(props.data.options).map(([key, value]) => (
            <button onClick={handler} className="btn" data-answer-id={key}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Question;
