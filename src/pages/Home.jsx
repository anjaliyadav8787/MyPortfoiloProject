// import React from 'react'
// import Typed from 'typed.js'
// import {motion} from "motion/react"
// const Home = () => {
//   const el = React.useRef(null);
//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['Frontent developer '],
//       typeSpeed: 100,
//       backSpeed:50,
//       loop:true
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []);
// return (
//     <div id='main' className=' bg-transparent relative w-[100%] lg:w-full h-[90vh] md:w-[100%] overflow-hidden  '  >
//       <div className=' bg-no-repeat absolute inset-0 z-0 bg-cover lg:h-[100vh]  bg-[url(https://static.vecteezy.com/system/resources/thumbnails/008/800/866/small_2x/global-connection-and-the-internet-network-modernization-in-smart-city-ai-cloud-internet-background-free-video.jpg)]'></div>
//       {
//         Array(20).fill('a').map((ele,i)=>{  
//           return <motion.div initial={{left:window.innerWidth*Math.random(),top:window.innerHeight*Math.random()}} transition={{duration:Math.random()*4+2, repeat:Infinity,ease:'easeInOut'}} animate={{translateX:[0,Math.random()*30,0],translateY:[0,Math.random()*30,0]}} className='w-[8px] h-[8px] rounded-[100%] bg-gray-600 absolute z-10'>
//           </motion.div>
//         })
//       }
// <div id='homepage' className=' flex flex-col justify-center items-center relative   w-full h-[90vh] bg-black/50 backdrop-blur-md backdrop-saturate-200
//   border border-white/20 
//  shadow-xl shadow-white/10 '>
//       <div className='flex items-center flex-col text-white lg:pb-10 '>
//       <h1 className='lg:text-7xl  md:text-7xl text-4xl xl:text-8xl '>I'm Anjali yadav</h1>
//       <h3 className='lg:text-5xl xl:text-6xl text-3xl mt-7'>I'm  <span ref={el} /></h3></div>
//       </div>
//     </div>
//   )
// }
// export default Home

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer 💻",
        "React Enthusiast ⚛️",
        "Creative Designer 🎨",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-black"
    >
      {/* Background Image */}
         <div className=' bg-no-repeat absolute inset-0 z-0 bg-cover lg:h-[100vh]  bg-[url(https://static.vecteezy.com/system/resources/thumbnails/008/800/866/small_2x/global-connection-and-the-internet-network-modernization-in-smart-city-ai-cloud-internet-background-free-video.jpg)]'></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-x-hidden ">
        {Array(25)
          .fill(0)
          .map((_, i) => (
            <motion.div  
              key={i}
              initial={{
                left: window.innerWidth * Math.random(),
                top: window.innerHeight * Math.random(),
              }}
              transition={{
                duration: Math.random() * 6 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              animate={{
                translateX: [0, Math.random() * 40, 0],
                translateY: [0, Math.random() * 40, 0],
              }}
              className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-cyan-400/60 absolute z-10"
            ></motion.div>
          ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white"
        >
          Hi, I'm <span className="text-cyan-400 font-semibold">Anjali Yadav</span>
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 mt-6"
        >
          A passionate <span ref={el} className="text-orange-400"></span>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
        >
          <Link
            to="/portfolio"
            className="px-6 py-3 rounded-full bg-cyan-600 text-white text-lg font-semibold shadow-lg hover:bg-cyan-600 transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

