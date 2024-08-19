import mongoose from "mongoose";
import blogModel from "../models/blog.model.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Please enter title" });
  }

  if (!description) {
    return res.status(400).json({ message: "Please enter description" });
  }

  try {
    const newBlog = {
      title,
      description,
    };

    const blogs = await blogModel.create(newBlog);

    res.status(201).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET BLOG
export const getBlogById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  try {
    const blog = await blogModel.findById(id);

    res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
