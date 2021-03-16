import React, { useState } from "react";

export default function Counter({ counter, setCounter, myName, setMyname }) {
  const [input, setInput] = useState("");
  let targetInput = "";
  let currentInput;
  const handleName = (event) => {
    targetInput = event.target.value;
  };
  const handleSubmit = () => {
    if (targetInput != "") {
      setInput(targetInput);
      handleClearInputField();
    }
  };
  const handleClearInputField = () => {
    let inputfield = (document.querySelector(".inputfield").value = "");
  };
  return (
    <div>
      <h1>Your name</h1>
      <h2>{input}</h2>
      <input className="inputfield" onChange={handleName} type="text"></input>
      <button onClick={handleSubmit}>Submit</button>
      <h2>Counter</h2>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
