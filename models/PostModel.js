import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Anonymous",
  },
  attachment: String,
  likeCount: {
    type: Number,
    default: 0,
  },
});

export const PostModel = mongoose.model("Post", schema);
