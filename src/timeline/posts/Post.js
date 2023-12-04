import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { IoIosMore } from "react-icons/io";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({user,postImage,likes,timespamp}) => {
  return (
    <div className='post'>
      <div className='post__header'>
      <div className='post__headerAuthor'>
      <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
        {user}.<span>{timespamp}</span>
      </div>
      <IoIosMore />

      </div>
      <div className='post__image'>
        <img src={postImage} alt='' />
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
        {likes}
      </div>
    </div>
  )
}

export default Post
