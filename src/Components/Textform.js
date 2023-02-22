import React, { useState } from "react";

export default function Textform(props) {
  const handleClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handlelowClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success")
  };
  const handleCopyClick = () => {
    // console.log("Uppercase was clicked" + text)
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success")
  };
  const handleRESClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("extra Spaces Removed", "success")
  };
  const handleonchange = (event) => {
    setText(event.target.value);
    // console.log("handleonchange")
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style = {{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style = {{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}
            onChange={handleonchange}
            id="mybox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRESClick}>Remove extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style = {{color: props.mode === 'light' ? 'black' : 'white'}} >
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
