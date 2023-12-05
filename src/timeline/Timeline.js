import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

const Timeline = () => {
  const [post,setPost]= useState([
    {
      user:"rahul_k",
      postImage:"https://cdn.pixabay.com/photo/2023/11/24/10/15/cockatoo-8409655_1280.jpg",
      likes:12,
      timespamp:"2d",
    },
    {
      user:"ameen",
      postImage:"https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_1280.jpg",
      likes:67,
      timespamp:"1d",
    },
    {
      user:"favas",
      postImage:"https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
      likes:30,
      timespamp:"5d",
    },
    {
      user:"farseena",
      postImage:"https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
      likes:24,
      timespamp:"1hr",
    },
  ])
  return (
    <div className='timeline'>
      <div className='timeline__left'>
      <div className='timeline__posts'>
     {post.map((post)=>(
      <Post user={post.user}
        postImage={post.postImage}
        likes={post.likes}
        timespamp={post.timespamp}
      />
     ))}
</div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline
