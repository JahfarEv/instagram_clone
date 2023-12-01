import React from 'react'
import "./Sidenav.css";
import Logo from './logo.png'
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";







const Sidenav = () => {
  return (
    <div className='sidenav'>
      <img className='sidenav__logo' src={Logo} alt=''/>
      <div className='sidenav__buttons'>
        <div className='side__button'>
        <IoMdHome />
          <span>Home</span>
        </div>
        <div className='side__button'>
        <IoSearchOutline />
          <span>Search</span>
        </div>
        <div className='side__button'>
        <MdOutlineExplore />
          <span>Explore</span>
        </div>
        <div className='side__button'>
        <BiMoviePlay />
          <span>Reels</span>
        </div>
        <div className='side__button'>
        <FaTelegramPlane />
          <span>Message</span>
        </div>
        <div className='side__button'>
        <FaRegHeart />
          <span>Notification</span>
        </div>
        <div className='side__button'>
        <FaRegSquarePlus />
         <span>Create</span>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
