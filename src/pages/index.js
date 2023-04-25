import { useEffect, useState } from 'react';
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

export default function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("todo-items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  function addItem(inputText) {
    const newItems = [...items, inputText]
    setItems(newItems);
    localStorage.setItem("todo-items", JSON.stringify(newItems));
  }

  function deleteItem(id) {
    const newItems = items.filter((item, index) => {
      return index !== id;
    });
    setItems(newItems);
    localStorage.setItem("todo-items", JSON.stringify(newItems))
  }

  function clearItems() {
    const newItems = []
    setItems(newItems);
    localStorage.setItem("todo-items", JSON.stringify(newItems))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} onClear={clearItems} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}