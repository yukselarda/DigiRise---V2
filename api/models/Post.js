const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  img: { type: Object, required: true },
  comment: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
