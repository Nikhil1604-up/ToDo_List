import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleAddToDo = () => {
    if (!input.trim()) return;
    const todoItem = {
      id: Date.now(),
      name: input,
      isCompleted: false,
    };

    setResults((prev) => [...prev, todoItem]);
    setInput("");
  };

  const handleToDoToggle = (id) => {
    setResults((prev) => {
      return prev?.map((items) => {
        return items?.id === id
          ? { ...items, ["isCompleted"]: !items?.isCompleted }
          : items;
      });
    });
  };

  const handleTodoDelete = (id) => {
    setResults((prev) => {
      return prev.filter((item) => item?.id !== id);
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter to do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddToDo}>
        Add +
      </button>

      <ul>
        {results?.map((toDoItem) => {
          return (
            <li key={toDoItem?.id} className="todo-item">
              <input
                type="checkbox"
                checked={toDoItem?.isCompleted}
                onChange={() => handleToDoToggle(toDoItem?.id)}
              />
              <span
                className={`todo-name ${
                  toDoItem?.isCompleted ? "todo-completed" : ""
                }`}
              >
                {toDoItem?.name}
              </span>
              <button
                onClick={() => handleTodoDelete(toDoItem?.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
