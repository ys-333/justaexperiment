const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connectDb = require('./config/db')
const Post = require('./models/Post')
const { v4: uuidv4 } = require('uuid')

// databse configuration
connectDb()

// middleware
app.use(express.json())
app.use(cors())

// getting all post
app.get('/post', async (req, res) => {
  const Posts = await Post.find()
  if (!Posts) {
    return res.send({ err: 'Something went wrong', data: [] }).status(500)
  }
  return res.send({ data: Posts }).status(200)
})

// creating new post
app.post('/post', async (req, res) => {
  //   creating new post;
  const post = req.body
  const id = uuidv4()

  const newPost = new Post({ id, post: post.post })

  const response = await newPost.save()

  // if (!response) {
  //   return res.send({ error: 'Something went wrong' }).status(500)
  // }

  const posts = await Post.find()

  // if (!posts) {
  //   return res.send({ data: [] }).status(500)
  // }

  return res.send({ data: posts }).status(200)
})

// updating post
app.patch('/post/:postId', async (req, res) => {
  console.log('path request')
  const { postId } = req.params
  const postBody = req.body

  console.log(postBody.post)
  const editPost = { post: postBody.editedPost }

  const post = await Post.find({ id: postId })

  const response = await Post.findByIdAndUpdate(
    { _id: post[0]._id },
    editPost,
    {
      new: true,
    },
  )

  if (!response) {
    return res.send({ err: 'Something went wrong', data: [] }).status(500)
  }

  // const Posts = await Post.find()
  return res.status(200).send({ data: response })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(PORT)
})

function print(stuff) {
  console.log(stuff)
}
