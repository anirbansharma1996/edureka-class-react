import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/blog";
import Write from "./pages/write";
import Register from "./pages/register";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />}></Route>
      <Route path="/write" element={<Write />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Blog />}></Route>
    </Routes>
  );
};

export default Allroutes;
