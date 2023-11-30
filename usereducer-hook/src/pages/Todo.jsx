import React, { useReducer, useState } from "react";
import { reducer } from "../reducer/reducer";

const Todo = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const handleUpdate = (id) => {
    dispatch({ type: "UPDATE_TODO", payload: id });
  };



  return (
    <div>
      <div>
        {todo.map((el) => (
          <div style={{ display: "flex" }}>
            <p
              onClick={() => handleUpdate(el.id)}
              style={{ textDecoration: el.complete ? "line-through" : "none" }}
            >
              {el.work}
            </p>{" "}
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Todo;
