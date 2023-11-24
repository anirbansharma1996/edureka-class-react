import React, { useContext, useState } from "react";
import { CountContext } from "../../context/CountContext";
import axios from "axios";

const BlogCard = ({ props }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  const { count, handleCount } = useContext(CountContext);

  const handleDelete = async (id) => {
    let bool = window.confirm("Do You Want to delete Post No :" + id);
    if (bool === true) {
      try {
        await axios.delete(`http://localhost:8008/posts/${id}`);
        handleCount((prev) => count + 1);
      } catch (error) {
        alert("Can not delete at this moment...");
      }
    }
  };

  const handleEditedContent = (e) => {
    setEditedContent((prev) => e.target.value);
  };
  const handleEditedPost = async (id) => {
    try {
      const res = await axios.put(`http://localhost:8008/posts/${id}`, {
        content: editedContent,
      });
      if (res.status === 200) {
        handleCount((prev) => count + 1);
        setIsEdit(false);
      }
    } catch (error) {
      alert("Can not Edit ...Try again later...");
    }
  };

  return (
    <>
      {isEdit ? (
        <div>
          <textarea
            placeholder="enter your new thoughts here.."
            cols="30"
            rows="10"
            value={editedContent}
            onChange={handleEditedContent}
          ></textarea>
          <button onClick={() => handleEditedPost(props.id)}>SAVE</button>
        </div>
      ) : (
        <div className="blog-card">
          <p>{props.content}</p>
          <button onClick={() => handleDelete(props.id)}>DELETE</button>{" "}
          <button onClick={() => setIsEdit(true)}>EDIT</button>
        </div>
      )}
    </>
  );
};

export default BlogCard;
