import React, { useState } from "react";
import axios from 'axios'

const Form = () => {
  const [todo, setTodo] = useState("");
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const handleInput = (e) => {
    setTodo((prev) => e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
        const response = await axios.post("http://localhost:8080/todo",{"task":todo})
        setLoading(false)
       if(response.status===201){
        alert('Todo added...')
       }
        setTodo("")
    } catch (error) {
      setLoading(false)
      setError("something went wrong...");
    }
  };






  return (
    <div>
      <h2>ADD TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={handleInput}
          value={todo}
          name="todo"
          type="text"
          placeholder="add your todo here"
        />
        <input type="submit" value="Add Todo" />
      </form>
       {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
};

export default Form;
