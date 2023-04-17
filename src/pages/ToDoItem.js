import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevItem) => {
      return !prevItem;
    });
  }

  return (
    <div onClick={handleClick}>
      <li
        style={{
          textDecoration: isDone ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
