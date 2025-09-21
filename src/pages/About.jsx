

// import React from 'react'
// import {motion} from "motion/react"
// const About = () => {
//   const skills = [
//     { name: "HTML", level: "99%" },
//     { name: "CSS", level: "95%" },
//     { name: "JavaScript", level: "90%" },
//     { name: "React.js", level: "85%" },
//     { name: "Tailwind CSS", level: "90%" },
//     { name: "Git & GitHub", level: "80%" },
//     { name: "GSAP / Swiper / Locomotive Scroll", level: "75%" },
//     { name: "Responsive Design", level: "95%" },  
    
//   ];
//   return (
//     <div className="relative h-[100vh] bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center ">
//         <div className="absolute inset-0 overflow-hidden">
//        {
//        Array(40).fill('a').map((ele,i)=>{
//            return <motion.div initial={{left:window.innerWidth*Math.random(),top:window.innerHeight*Math.random()}} transition={{duration:Math.random()*4+2, repeat:Infinity,ease:'easeInOut'}} animate={{translateX:[0,Math.random()*30,0],translateY:[0,Math.random()*30,0]}} className='w-[8px] h-[8px] rounded-[100%] bg-gray-600 absolute z-10'>
//           </motion.div>
//         })
//        } 
//        </div>
//       {/* Black overlay */}
//       <div className="bg-black/50 absolute inset-0 z-0"></div>

//       {/* Content */}
      

//       <div className="relative z-10 flex items-center justify-center h-full">
//         <div className="w-[80%] md:w-[70%] lg:w-[60%] p-8 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-xl text-white">
//          <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
//               About Me
//             </h1>
//           <h1 className="text-center text-2xl font-semibold mb-6">
//             Hi, I'm Anjali Yadav — a passionate Frontend Developer.  
//             I specialize in creating beautiful, responsive, and user-friendly web interfaces using technologies like  
//             HTML, CSS, JavaScript, React, Tailwind CSS, Animation, Context API.
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg ">
//             <p><span className="font-semibold">Name:</span> Anjali Yadav</p>
//             <p><span className="font-semibold">Email:</span> anjaliyaduvanshi@gmail.com</p>
//             <p><span className="font-semibold">Phone No:</span> +91 8303837622</p>
//             <p><span className="font-semibold">Address:</span> Lucknow, Uttar Pradesh</p>
//             <p><span className="font-semibold">High School:</span> Inter College Natuli</p>
//             <p><span className="font-semibold">Intermediate:</span> Inter College Natuli</p>
//             <p><span className="font-semibold">Graduation:</span> Kamla Nehru Institute, Sultanpur</p>
//             <p><span className="font-semibold">Post Graduation:</span> Kamla Nehru Institute, Sultanpur</p>
//           </div>
//         </div>
//       </div>

//     <div className="relative h-[100vh] bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         <h1 className="text-white text-4xl font-bold mb-8">Skills</h1>

//         {/* Glass Card */}
//         <div className="w-[90%] md:w-[70%] lg:w-[60%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
//           {skills.map((skill, index) => (
//             <div key={index} className="mb-6">
//               <div className="flex justify-between mb-1 text-white">
//                 <span className="font-medium">{skill.name}</span>
//                 <span>{skill.level}</span>
//               </div>
//               <div className="w-full bg-gray-300/30 rounded-full h-3">
//                 <div
//                   className="bg-gradient-to-r from-sky-500 to-orange-500 h-3 rounded-full"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default About

import React from "react";
import { motion } from "motion/react";

const About = () => {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "95%" },
    { name: "JavaScript", level: "90%" },
    { name: "React.js", level: "85%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "Git & GitHub", level: "80%" },
    { name: "GSAP / Swiper / Locomotive Scroll", level: "75%" },
    { name: "Responsive Design", level: "95%" },
  ];

  return (
    <div className="w-full">
      {/* ============ ABOUT SECTION ============ */}
      <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        {/* Floating Dots Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {Array(40)
            .fill("a")
            .map((ele, i) => (
              <motion.div
                key={i}
                initial={{
                  left: window.innerWidth * Math.random(),
                  top: window.innerHeight * Math.random(),
                }}
                transition={{
                  duration: Math.random() * 4 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                animate={{
                  translateX: [0, Math.random() * 30, 0],
                  translateY: [0, Math.random() * 30, 0],
                }}
                className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-gray-600 absolute z-10"
              ></motion.div>
            ))}
        </div>

        {/* Overlay */}
        <div className="bg-black/50 absolute inset-0 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] p-6 sm:p-8 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h1>
            <p className="text-center text-base sm:text-lg md:text-2xl font-medium mb-6 leading-relaxed">
              Hi, I'm <span className="font-bold">Anjali Yadav</span> — a
              passionate Frontend Developer. I specialize in creating beautiful,
              responsive, and user-friendly web interfaces using technologies
              like HTML, CSS, JavaScript, React, Tailwind CSS, Animation, and
              Context API.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
              <p>
                <span className="font-semibold">Name:</span> Anjali Yadav
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                anjaliyaduvanshi@gmail.com
              </p>
              <p>
                <span className="font-semibold">Phone No:</span> +91 8303837622
              </p>
              <p>
                <span className="font-semibold">Address:</span> Lucknow, Uttar
                Pradesh
              </p>
              <p>
                <span className="font-semibold">High School:</span> Inter
                College Natuli
              </p>
              <p>
                <span className="font-semibold">Intermediate:</span> Inter
                College Natuli
              </p>
              <p>
                <span className="font-semibold">Graduation:</span> Kamla Nehru
                Institute, Sultanpur
              </p>
              <p>
                <span className="font-semibold">Post Graduation:</span> Kamla
                Nehru Institute, Sultanpur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ SKILLS SECTION ============ */}
      <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Skills
          </h1>

         
          <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4 sm:mb-6">
                <div className="flex justify-between mb-1 text-xs sm:text-sm md:text-base text-white">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-300/30 rounded-full h-2 sm:h-3">
                  <div
                    className="bg-gradient-to-r from-sky-500 to-orange-500 h-2 sm:h-3 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

