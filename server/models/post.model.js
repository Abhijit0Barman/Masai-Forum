// models/post.js

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  title: {
    type: String,
    maxlength: 100,
    required: true,
  },
  category: {
    type: String,
    enum: ["Development", "Design", "Innovation", "Tutorial", "Bussiness"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  media: [String],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      content: String,
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
