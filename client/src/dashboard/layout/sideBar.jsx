import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { TiNews } from "react-icons/ti";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
function sideBar() {

  const { pathname } = useLocation();

  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
      <div className='h-[70px] flex justify-center items-center'>
        <Link to="/">
          <img className='w-[170px] h-[140px]' src='http://localhost:5173/logo121.png'/>
      </Link>
      </div>
      <ul className='px-3 flex-col gap-y-1 font-medium'>
        <li>
          <Link to="/dasboard/admin" className={`px-3 py-2 ${pathname==='/dasboard/admin' ? "bg-indigo-500 text-white" :"bg-white text-[#404040f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full gap-y-1 rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span><MdDashboard/></span>
            <span className='text-xl'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/dasboard/news" className={`px-3 py-2 ${pathname==='/dasboard/news' ? "bg-indigo-500 text-white" :"bg-white text-[#4048f6]"} gap-y-1 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span><TiNews/></span>
            <span className='text-xl'>News</span>
          </Link>
        </li>
        <li>
          <Link to="/dasboard/writter/add" className={`px-3 py-2 ${pathname==='/dasboard/writter/add' ? "bg-indigo-500 text-white" :"bg-white text-[#4048f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span><MdOutlineAddToPhotos/></span>
            <span className='text-xl'>Add Writter</span>
          </Link>
        </li>
        <li>
          <Link to="/dasboard/writters" className={`px-3 py-2 ${pathname==='/dasboard/writters' ? "bg-indigo-500 text-white" :"bg-white text-[#4048f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span><FaUserTie/></span>
            <span className='text-xl'>Writters</span>
          </Link>
        </li>
        <li>
          <Link to="/dasboard/profile" className={`px-3 py-2 ${pathname==='/dasboard/profile' ? "bg-indigo-500 text-white" :"bg-white text-[#4048f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span><CgProfile/></span>
            <span className='text-xl'>Profile</span>
          </Link>
        </li>
         <li>
          <Link to="/dasboard/logout" className={`px-3 py-2 ${pathname==='/dasboard/logout' ? "bg-indigo-500 text-white" :"bg-white text-[#4048f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span><AiOutlineLogout/></span>
            <span className='text-xl'>Log Out</span>
          </Link>
       </li>
      </ul>
    </div>
  )
}

export default sideBar
