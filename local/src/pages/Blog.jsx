import { useState } from "react";

const Blog = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("blogs")) || []);

  return (
    <div className="blog-main-container">
      <h2>BLOGS</h2>
      <div className="blog-container">
        {data.map((el) => (
          <div className="story">
            <div className="solo-blog-container">
              <h5>{el.title}</h5>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
