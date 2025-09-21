import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import {motion} from "motion/react"
import { FiAlignJustify } from "react-icons/fi";
import SideBar from "./SideBar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Navbar = () => {
   const [open, setOpen] = useState(false);
     const closeSidebar = () => setOpen(false);
  return (
   
    // <motion.h1 animate= {{rotate:"360deg"}}
    // style={{width:"max-content"}}
    // transition={{duration:2}} >This is Animation page </motion.h1>
 <div className= 'bg-cyan-900  shadow-4xl h-[70px] text-[#444444] flex justify-between w-[100%] px-8 md:px-2'>
  <div className=' flex items-center text-[25px] ml-[10px] md:ml-0 px-8 '>
  <motion.h1 animate={{rotate:"360deg"}} style={{width:"max-content"}} transition={{duration:2}}  className='text-white text-[30px] font-medium sm:text-[40px]  lg:text-[30px] md:text-2xl '>Anjali Yadav</motion.h1></div>
    <div className='hidden lg:flex items-center justify-end flex-1 px-8' >
  <ul className='flex items-center justify-center gap-[30px] text-[23px] md:text-[15px] text-white font-serif '>  
     <NavLink to={'/'} className={({isActive})=>`${isActive ? "border-b-4  transition-all border-blue-400":"text-white"} cursor-pointer `} ><li className='text-[20px]' >Home</li></NavLink>
        <NavLink to={'/about'} className={({isActive})=>`${isActive ? " border-b-4 transition-all border-blue-400":"text-white"} cursor-pointer `} ><li className='text-[20px]' >About</li></NavLink>
        <NavLink to={'/resume'} className={({isActive})=>`${isActive ? "border-b-4  transition-all border-blue-400  ":"text-white"} cursor-pointer `} ><li className='text-[20px]' >Resume</li></NavLink>
        <NavLink to={'/portfolio'} className={({isActive})=>`${isActive ? "transition-all border-b-4  border-blue-400":"text-white"} cursor-pointer `} ><li className='text-[20px]'>Portfolio</li></NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`${isActive ? " transition-all border-b-4  border-blue-400":"text-white  "} cursor-pointer `} ><li className='text-[20px]'>Contact</li></NavLink>
       <div className=' text-white flex '>
      <p className='text-[28px] flex gap-5  '>  <a href="https://www.linkedin.com/in/anjali-yadav-022a0a24b/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin size={28} className="text-white hover:text-blue-500" />
             </a>
             <a href="https://github.com/anjaliyadav8787" target="_blank" rel="noopener noreferrer">
             <FaGithub size={28} className="text-white hover:text-gray-600" />
              </a> </p>
      </div>
      </ul>
       </div>      
        <div className="lg:hidden flex items-center px-12 ">
        <FiAlignJustify
          size={28}
          className="text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* Sidebar for mobile */}
      {open && (
        <div className="absolute top-[70px] left-0 w-[170px] h-[90vh]  bg-teal-600 z-50">
          <div className="p-6 text-white">
              <div className="mb-8">
                  <img
                    className="w-[100px] h-[100px] rounded-full border-4 border-indigo-600"
                    src="https://i.pinimg.com/736x/de/99/93/de9993e752fc52646579448542c411d3.jpg"
                    alt="profile"
                  />
                  <h1 className="mt-2 text-xl font-bold">Anjali Yadav</h1>  
                   
                </div>
         <ul className="space-y-6 text-lg">
          <p className="text-2xl mt-2 flex gap-3">
               <a href="https://www.linkedin.com/in/anjali-yadav-022a0a24b/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin size={28} className="text-blue-700 hover:text-blue-500" />
             </a>
             <a href="https://github.com/anjaliyadav8787" target="_blank" rel="noopener noreferrer">
             <FaGithub size={28} className="text-black hover:text-gray-600" />
              </a>
                  </p>
                  <li>
                    <Link to={"/"} onClick={closeSidebar} className="hover:text-yellow-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"} onClick={closeSidebar} className="hover:text-yellow-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={"/resume"} onClick={closeSidebar} className="hover:text-yellow-400">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to={"/portfolio"} onClick={closeSidebar} className="hover:text-yellow-400">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"} onClick={closeSidebar} className="hover:text-yellow-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
          <SideBar closeSidebar={() => setOpen(false)} />
        </div>
      )}
     
    </div>
   
  )
}

export default Navbar
