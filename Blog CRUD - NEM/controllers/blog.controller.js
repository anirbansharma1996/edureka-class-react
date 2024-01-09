const Blog = require("../models/blog.model.js");

//ALL POSTS
const getAllBlog = async (req, res) => {
  try {
    const posts = await Blog.find();
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(503).send(error.message);
  }
};

//SOLO POSTS

const getSoloBlog = async (req, res) => {
  try {
    const blogID = req.params.id;
    const soloPost = await Blog.findOne({ _id: blogID });
    if (soloPost) {
      return res.status(200).send(soloPost);
    } else {
      return res.status(404).send("Invalid ID");
    }
  } catch (error) {
    return res.status(503).send(error.message);
  }
};

//POST BLOG

const postSingleBLog = async (req, res) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
    });
    await newBlog.save();
    return res.status(201).send("blog posted successfully");
  } catch (error) {
    return res.status(503).send(error.message);
  }
};

// UPDATE BLOG

const updateSoloBlog = async (req, res) => {
  try {
    const updatePost = await Blog.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    if (updatePost) {
      return res.status(201).send("updated successfully");
    } else {
      return res.status(404).send("something went wrong");
    }
  } catch (error) {
    return res.status(503).send(error.message);
  }
};
//DELETE BLOG
const deleteSoloPost = async (req, res) => {
  try {
    const deletePost = await Blog.deleteOne({ _id: req.params.id });
    if (deletePost) {
      return res.status(200).send("deleted successfully");
    } else {
      return res.status(404).send("something went wrong");
    }
  } catch (error) {
    return res.status(503).send(error.message);
  }
};

module.exports = {
  getAllBlog,
  getSoloBlog,
  postSingleBLog,
  updateSoloBlog,
  deleteSoloPost,
};
