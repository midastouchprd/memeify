const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
  },
  { timestamps: true }
);

const memePostSchema = new mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    memeImage: { type: String, required: true },
    caption: { type: String },
    comments: [commentSchema],
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MemePost', memePostSchema);
