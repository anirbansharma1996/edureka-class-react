import { useState } from "react";

export default function Write() {
  const [blogArr, setBlogArr] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedData = [...existingData, blog];
    localStorage.setItem("blogs", JSON.stringify(updatedData));
    setBlogArr(updatedData);
    setBlog({
      title: "",
      description: "",
    });
  };

  return (
    <>
      <form className="write" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          onChange={handleInput}
          value={blog.title}
          type="text"
        />
        <label>Description</label>
        <textarea
          name="description"
          onChange={handleInput}
          value={blog.description}
          rows="10"
        ></textarea>
        <input type="submit" value="Upload" />
      </form>
    </>
  );
}
