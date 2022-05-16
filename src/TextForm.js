import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  return (
    <>
      <div className="container my-4">
        <h2>
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter the Text below
          </label>
        </h2>
        <textarea
          className="form-control my-2"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={() => handleUpClick()}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleLowClick()}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleClearClick()}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h3>Text Summary:</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes will be required to read</p>
        {/* Time to calculate one word */}
        <h5>Preview:</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
