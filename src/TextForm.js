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

  const handleCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container my-4">
        <h2>
          <label for="exampleFormControlTextarea1" className="form-label">
            Enter the Text below
          </label>
        </h2>
        <textarea
          className="form-control my-2"
          id="textBox"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary mx-1"
          onClick={() => handleUpClick()}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => handleLowClick()}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => handleClearClick()}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={() => handleCopy()}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => handleExtraSpaces()}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-1">
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
