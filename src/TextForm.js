import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>
          <label for="exampleFormControlTextarea1" className="form-label">
            Enter the Text below
          </label>
        </h2>
        <textarea
          className={`form-control my-2 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          id="textBox"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            backgroundColor: props.mode === "dark" ? "#101317" : "white",
          }}
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
      <div
        className={`container my-1 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Text Summary:</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes will be required to read</p>
        {/* Time to calculate one word */}
        <h5>Preview:</h5>
        <p>{text.length > 0 ? text : "Enter something to Preview it here"}</p>
      </div>
    </>
  );
}
