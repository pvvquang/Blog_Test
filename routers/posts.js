import express from "express";
import PostController from "../controllers/PostController.js";

const router = express.Router();

router.get("/posts", PostController.getPosts);

router.post("/post/create", PostController.createPost);
router.post("/post/update", PostController.updatePost);
router.post("/post/delete", PostController.deletePost);

export default router;
