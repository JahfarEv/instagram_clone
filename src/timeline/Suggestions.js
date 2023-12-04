import React from 'react'
import "./Suggestions.css"
import { Avatar } from '@mui/material'

const Suggestions = () => {
  return (
    <div className='sugessions'>
    <div className='sugessions__title'>
      Sugessions for you
    </div>
    <div className='sugessions__usernames'>
      <div className='sugessions__username'>
        <div className='username__left'>
        <span className='avatar'>
          <Avatar>R</Avatar>
        </span>
        <div className='username__info'>
          <span className='username'>Jahfar</span>
          <span className='relation'>New to instagram</span>
        </div>

        </div>
        <button className=''>Follows</button>
      </div>
    </div>
    </div>
  )
}

export default Suggestions
