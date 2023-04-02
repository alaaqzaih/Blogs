import React from 'react'
import { useParams } from 'react-router-dom'

function Post({ post }) {
  let { id } = useParams()
  let postItem = post.find((item) => item.id === parseInt(id))
  return (
    <div className='container mt-4'>
      <div class="card mb-3">
        <img src={postItem.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5>{postItem.title}</h5>
          <p>{postItem.postContent}</p>
          <p>
            <small class="text-body-secondary">{postItem.author}</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
