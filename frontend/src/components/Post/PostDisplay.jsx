import React, { useState, useEffect, useRef } from 'react'
import Input from '../Custom/Input'

const PostDisplay = ({ posts }) => {
  // hooks

  const [Posts, setPosts] = useState(posts)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef()
  useEffect(() => {
    setPosts(posts)
  }, [posts])

  // to edit resource

  const editHandler = async (postId) => {
    const editedPost = inputRef.current.value

    console.log(editedPost)

    if (editedPost.length === 0) return

    const response = await fetch(`http://localhost:3000/post/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify({ editedPost }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const updatedPost = await response.json()

    console.log(updatedPost)

    const newPost = Posts.map((post) => {
      if (post.id === updatedPost.data.id) {
        console.log(post.id, updatedPost.data.id)
        return updatedPost.data
      } else return post
    })

    console.log(postId)

    setPosts(newPost)

    setIsEditing((prev) => !prev)
  }

  // delete resource

  const deleteHandler = async (postId) => {
    console.log(postId)
    const response = await fetch(`http://localhost:3000/post/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // to be done

    const data = await response.json()

    if (data.data.length === 0) alert('something went wrong')

    setPosts(data.data)
  }

  return (
    <React.Fragment>
      {isEditing && (
        <Input type="text" placeholder="edit your post..." ref={inputRef} />
      )}
      <table>
        <tr>
          <th>ID</th>
          <th>Post</th>
          <th>Edit/Delete</th>
        </tr>
        <tbody>
          {Posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.post}</td>
                <td>
                  {!isEditing ? (
                    <button onClick={() => setIsEditing((prev) => !prev)}>
                      Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        editHandler(post.id)
                      }}
                    >
                      Save
                    </button>
                  )}
                  <button onClick={() => deleteHandler(post.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default PostDisplay

/*
  We are trying to build a CRUD app:
    C - > Create is done 
    R - > Read is done
    U - > pending
    D - > pending
*/
