import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    if (inputText.trim() === "") {
      setErrorMessage("Please type something");
    } else {
      props.onAdd(inputText);
      setInputText("");
      setErrorMessage("");
    }
  }

  function handleClear() {
    props.onClear();
    setInputText("");
    setErrorMessage("");
  }

  return (
    <div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Please enter a task..."
          value={inputText}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <button onClick={handleClear}>
          <span>Clear</span>
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default InputArea;
