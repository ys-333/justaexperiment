import React, { useState, useRef, useEffect } from 'react'
import PostDisplay from './PostDisplay'

const url = 'http://localhost:3000/post'

const Post = () => {
  const [posts, setPosts] = useState([])
  const inputRef = useRef()

  async function fetchPost() {
    const response = await fetch(url, {
      method: 'GET',
    })

    const data = await response.json()

    if (data.data.length === 0) {
      console.log(data.err)
      return
    }

    setPosts(data.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  //   executes when the client press enter button
  const submitHandler = async (event) => {
    event.preventDefault()
    const postValue = inputRef.current.value.trim()
    if (postValue === '') return

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ post: postValue }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const Posts = await response.json()
    console.log(Posts.data)
    setPosts(Posts.data)
  }
  return (
    <>
      <form>
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="enter post..."
          ref={inputRef}
          //   onKeyDown={submitHandler}
        ></textarea>
        <button type="submit" onClick={submitHandler}>
          Post
        </button>
      </form>
      {/* displaying data */}
      <PostDisplay posts={posts} />
    </>
  )
}
export default Post
