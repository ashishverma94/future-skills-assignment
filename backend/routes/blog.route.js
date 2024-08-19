import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
} from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/cards", createBlog);
blogRouter.get("/cards", getAllBlogs);
blogRouter.get("/cards/:id", getBlogById);

export default blogRouter;
