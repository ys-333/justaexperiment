const Post = require('../models/Post')
const { v4: uuidv4 } = require('uuid')

exports.getPost = async (req, res) => {
  const Posts = await Post.find()
  if (!Posts) {
    return res.send({ err: 'Something went wrong', data: [] }).status(500)
  }
  return res.send({ data: Posts }).status(200)
}
exports.createPost = async (req, res) => {
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
}
exports.editPost = async (req, res) => {
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
}
exports.deletePost = async (req, res) => {
  const { postId } = req.params

  const post = await Post.find({ id: postId })

  const query = await Post.findByIdAndDelete({ _id: post[0]._id })

  // if (!query) {
  //   return res.status(500).send({ err: 'Something went wrong', data: [] })
  // }

  // console.log(query)

  const Posts = await Post.find()

  return res.status(200).send({ data: Posts })
}
