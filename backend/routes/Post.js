const express = require('express')
const router = express.Router()

const {
  getPost,
  createPost,
  editPost,
  deletePost,
} = require('../controllers/Post')

// getting all post
router.get('/post', getPost)

// creating new post
router.post('/post', createPost)

// updating post
router.patch('/post/:postId', editPost)

router.delete('/post/:postId', deletePost)

module.exports = router
