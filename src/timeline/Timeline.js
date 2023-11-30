import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='timeline__left'>Timeline</div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline
