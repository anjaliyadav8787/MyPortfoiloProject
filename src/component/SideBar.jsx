// import React from 'react'
// import { Link } from 'react-router-dom'

// const SideBar = () => {
//   return (
//     <div  className='bg-blue-950 w-[300px] h-[100vh] text-white  '>
//         <div className='ml-[50px]'><img className='w-[100px] h-[100px] rounded-[50%] border-4 border-indigo-600 ' src='https://i.pinimg.com/736x/de/99/93/de9993e752fc52646579448542c411d3.jpg' alt="" />
//         <h1>Anjali Yadav</h1>
//         <p className='text-3xl'><i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-github"></i> </p>
//         </div>
//       <ul>
//         <li><Link to={'/'}>Home</Link></li>
//         <li><Link to={'/about'}>About</Link></li>
//         <li><Link to={'/resume'}>Resume</Link></li>
        
//       </ul>
//     </div>
//   )
// }

// export default SideBar

// import React from 'react'
// import { Link } from 'react-router-dom'

// const SideBar = () => {
//   return (
//     <div className='bg-blue-700 w-[30%]'> 
//       <div className='ml-[50px] mt-6 '>
//         <img 
//           className='w-[100px] h-[100px] rounded-[50%] border-4 border-indigo-600' 
//           src='https://i.pinimg.com/736x/de/99/93/de9993e752fc52646579448542c411d3.jpg' 
//           alt="profile" 
//         />
//         <h1 className='mt-2 text-xl font-bold'>Anjali Yadav</h1>
//         <p className='text-2xl mt-2'>
//           <i className="fa-brands fa-linkedin mr-3"></i> 
//           <i className="fa-brands fa-github"></i>
//         </p>
//       </div> 
//        <ul className='mt-10 space-y-6 ml-[20px] text-lg'>
//         <li><Link to={'/'} className='hover:text-yellow-400'>Home</Link></li>
//         <li><Link to={'/about'} className='hover:text-yellow-400'>About</Link></li>
//         <li><Link to={'/resume'} className='hover:text-yellow-400'>Resume</Link></li>
//       </ul>
//     </div>
//   )
// }

// export default SideBar


import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ closeSidebar }) => {
  return (
    <div className="p-6 text-white">
      {/* <div className="mb-8">
        <img
          className="w-[100px] h-[100px] rounded-full border-4 border-indigo-600"
          src="https://i.pinimg.com/736x/de/99/93/de9993e752fc52646579448542c411d3.jpg"
          alt="profile"
        />
        <h1 className="mt-2 text-xl font-bold">Anjali Yadav</h1>
        <p className="text-2xl mt-2 flex gap-3">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </p>
      </div>

      <ul className="space-y-6 text-lg">
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
      </ul> */}
    </div>
  );
};

export default SideBar;

