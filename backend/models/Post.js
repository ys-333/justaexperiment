const mongoose = require('mongoose')
const { Schema, model } = mongoose

const postSchema = new Schema({
  id: String,
  post: String,
})

const Post = model('Post', postSchema)

module.exports = Post
