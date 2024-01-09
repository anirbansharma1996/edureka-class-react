const express = require("express");
const {
  getAllBlog,
  getSoloBlog,
  postSingleBLog,
  updateSoloBlog,
  deleteSoloPost,
} = require("../controllers/blog.controller.js");

const route = express();

route.get("/posts", getAllBlog);
route.get("/post/:id", getSoloBlog);
route.post("/post", postSingleBLog);
route.put("/post/:id", updateSoloBlog);
route.delete("/post/:id", deleteSoloPost);

module.exports = route;
