import React from "react";
import {useInput, useBoolean, useNumber} from "react-hanger";

function Survey() {
  const surveyInput = useInput("");
  const showComment = useBoolean(false);
  const comment = useInput("");
  const feeling = useInput("");
  const rating = useNumber(0);
  const handleSubmit = () => {
    const form = {}
    console.log(form)
  }

  

  return (
    <div className="container">
      <h1>Use this form to provide feedback for our product!</h1>
      <h4>What was your favorite thing about our product?</h4>
      <input type="text" value={surveyInput.value} onChange={surveyInput.onChange} />
      <h4>How would you rate our product?</h4>
      <div className="form-group" >
        <input type="radio" name="rating-1" />1
        <input type="radio" name="rating-1" />2
        <input type="radio" name="rating-1" />3
        <input type="radio" name="rating-1" />4
        <input type="radio" name="rating-1" />5
      </div>
      
      <h4>How did our product make you feel?</h4>
      <div className="form-group emoji" >
        <span role="img" aria-label="angry">
            😠
        </span>
        <span role="img" aria-label="indifferent">
            😒
        </span>
        <span role="img" aria-label="happy">
            😄
        </span>
        <div className="response">
        </div>
        <div>
      </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Survey;