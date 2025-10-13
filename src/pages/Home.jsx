

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import myimage from '../assets/cf8fa671-7fec-4de6-bfb5-a791dedd6c75.png'
import Tilt from 'react-parallax-tilt';
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
      className="relative w-full min-h-screen flex items-center justify-around bg-black"
    >
      {/* Background Image */}
         <div className=' bg-no-repeat absolute inset-0 z-0 bg-cover lg:h-[100vh]  bg-[url(https://static.vecteezy.com/system/resources/thumbnails/008/800/866/small_2x/global-connection-and-the-internet-network-modernization-in-smart-city-ai-cloud-internet-background-free-video.jpg)]'></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-x-hidden  ">
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
          className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-white"
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
    {/* <div className="relative w-[350px] h-[350px] rounded-full border-2 border-teal-700 overflow-hidden">
  <img
    src={myimage}
    alt=""
    className="w-full h-full rounded-full object-cover
               shadow-[0_0_20px_rgba(0,128,255,0.7),
                       0_0_40px_rgba(0,128,255,0.5),
                       0_0_60px_rgba(0,128,255,0.3)]
               transition-transform duration-300 ease-in-out
               hover:scale-105"
  /> 
 </div>  */}

 <div className="relative flex justify-center mt-10">
  <Tilt
    className="rounded-full border-2 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.7),0_0_40px_rgba(0,255,255,0.5),0_0_60px_rgba(0,255,255,0.3)]"
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    perspective={1000}
    scale={1.1}
    transitionSpeed={1000}
    gyroscope={true}
  >
    <motion.img
      src={myimage}
      alt="Anjali"
      className="w-[300px] md:w-[400px] lg:w-[450px] h-[300px] md:h-[400px] lg:h-[450px] rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.5)]"
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        rotate: [0, 3, -3, 0],
        boxShadow: "0 0 40px rgba(0,255,255,0.8), 0 0 60px rgba(0,255,255,0.6)",
      }}
    />
  </Tilt>
</div>

 

    </div>
  );
};

export default Home;

