import React, { useState } from "react";

const Write = () => {
  const [blog, setBlog] = useState({ title: "", description: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const prevdata = JSON.parse(localStorage.getItem("blogs")) || [];
    const newdata = [...prevdata, blog];
    localStorage.setItem("blogs", JSON.stringify(newdata));
    setTimeout(() => {
      alert("Blog posted Successfuly");
    }, 1000);
    setBlog({ title: "", description: "" })
  };
   

  return (
    <div className="write-container">
      <h2>WRITE</h2>
      <form onSubmit={handleSubmit} className="write-form">
        <input
          onChange={handleInput}
          value={blog.title}
          name="title"
          type="text"
          placeholder="enter title"
        />
        <textarea
          onChange={handleInput}
          value={blog.description}
          name="description"
          cols="30"
          rows="10"
          placeholder="enter description"
        ></textarea>
        <input type="submit" value="Submit Blog" />
      </form>
    </div>
  );
};

export default Write;
