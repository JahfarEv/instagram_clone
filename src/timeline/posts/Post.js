import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { IoIosMore } from "react-icons/io";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = () => {
  return (
    <div className='post'>
      <div className='post__header'>
      <div className='post__headerAuthor'>
      <Avatar>J</Avatar>
        renjan_ <span>10h</span>
      </div>
      <IoIosMore />

      </div>
      <div className='post__image'>
        <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' alt='' />
      </div>
      <div className='post__footer'>
        <div className='post__footerIcons'>
            <div className='post__iconsMain'>
                <FavoriteBorderIcon className='postIcon'/>
                <ChatBubbleOutlineIcon className='postIcon' />
                <TelegramIcon className='postIcon'/>
            </div>
            <div className='post__iconSave'>
              <BookmarkBorderIcon className='postIcon' />
            </div> 
        </div>
        Liked by 21 people
      </div>
    </div>
  )
}

export default Post
