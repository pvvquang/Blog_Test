import { PostModel } from "../models/PostModel.js";

class PostController {
  async getPosts(req, res) {
    try {
      const posts = await PostModel.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async createPost(req, res) {
    try {
      const newPost = req.body;

      const post = await PostModel(newPost);
      post.save();

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async updatePost(req, res) {
    try {
      const updatePost = req.body;

      const post = await PostModel.findOneAndUpdate(
        { _id: updatePost._id },
        updatePost,
        { new: true }
      );

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  async deletePost(req, res) {
    try {
      const currentPost = req.body;

      const post = await PostModel.findOneAndDelete({ _id: currentPost._id });

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

export default new PostController();
