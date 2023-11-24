import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { CountContext } from "../../context/CountContext";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { count } = useContext(CountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:8008/posts");
        setIsLoading(false);
        setBlog(res.data);
      } catch (error) {
        setIsLoading(false);
        alert("500 Error , NOT FOUND ");
      }
    };
    fetchData();
  }, [count]);

  return (
    <div>
      <h4 style={{textAlign:"center"}}>Blogs</h4>
      <div className="blogs">
        {blog.reverse().map((el) => (
          <BlogCard props={el} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
