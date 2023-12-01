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
import { LuMenu } from "react-icons/lu";








const Sidenav = () => {
  return (
    <div className='sidenav'>
      <img className='sidenav__logo' src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png?fit=978%2C373" alt=''/>
      <div className='sidenav__buttons'>
        <button className='sidenav__button'>
        <IoMdHome />
          <span>Home</span>
        </button>
        <button className='sidenav__button'>
        <IoSearchOutline />
          <span>Search</span>
        </button>
        <button className='sidenav__button'>
        <MdOutlineExplore />
          <span>Explore</span>
        </button>
        <button className='sidenav__button'>
        <BiMoviePlay />
          <span>Reels</span>
        </button>
        <button className='sidenav__button'>
        <FaTelegramPlane />
          <span>Message</span>
        </button>
        <button className='sidenav__button'>
        <FaRegHeart />
          <span>Notification</span>
        </button>
        <button className='sidenav__button'>
        <FaRegSquarePlus />
         <span>Create</span>
        </button>
      </div>
      <div className='sidenav__more'>
        <button className='sidenav__button'>
        <LuMenu />
<span>More</span>
        </button>
      </div>
    </div>
  )
}

export default Sidenav
