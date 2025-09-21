  // import React from 'react'
  // import img from '../assets/WhatsApp-image .jpg'
  // import img2 from '../assets/Screenshot.png'
  // import img3 from '../assets/clockImg.png'

  // const Portfolio = () => {
  //   return (
      
  //     <div className=' 2xl:px-[18px] bg-black sm:px-2 w-full min-h-screen '>

  // <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 h-full xl:min-h-[100vh]  xl:px-5  '>
  //       <div className=' border-1 border-gray-100 shadow-2xl   
  //        sm:w-[300px] sm:h-[800px] lg:w-[400px] xl:w-[400px] xl:min-h-[800px]  sm:py-4 lg:py-4 xl:py-4 px-8  font-medium bg-white md:w-[256px] md:h-[580px] md:px-5 md:py-2 mt-5 h-[800px] w-[390px] m-auto '>
  //         <img src={img} alt="" />  
  //         <h1 className='font-bold md:xl:text-2xl lg:xl:text-2xl xl:text-2xl md:text-[10px] font-serif mt-2 text-2xl '>1  Title:-  <span>E-Commerce Project  </span> </h1>
  //         <h1 className='mt-4 md:mt-1 sm:mt-1 sm:text-[20px] md:text-2xl lg:text-2xl xl:text-2xl md:text-[15px]'>2 Description:- </h1><span className='md:text-[10px] xl:text-[15px] xl:w-[380px]  md:line-clamp-6 md:w-[150px] xl:px-2 sm:text-[14px] '>A fully responsive e-commerce frontend with smooth animations, interactive product cards, and a clean shopping experience.</span>
  //         <h1 className='mt-4 text-2xl md:text-[15px] md:mt-2 xl:text-2xl sm:mt-1 sm:text-[20px]'>3 Features:- </h1><span className='md:text-[10px] md:line-clamp-4 xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'> Responsive Design (mobile-first approach) </span>
  //         <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>Search Bar with Suggestions</h3>
  //         <h3 className='md:text-[10px]  xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>State Management (Context API)</h3>
  //         <h3 className='md:text-[10px] xl:text-[15px] xl:w-[380px] xl:px-2 sm:text-[14px] '>Data Fetching from API (dummyJSON, fakestoreapi, etc.)</h3>
  //         <h3 className='md:text-[10px]  xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>Add To Cart</h3>
  //         <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px]  xl:px-2 sm:text-[14px]'>View To Cart</h3>

  //         <h1 className='mt-4 text-2xl  md:text-[15px] md:mt-2 xl:text-2xl sm:mt-1 sm:text-[20px]'>4   Tech Stack</h1>
  //         <h3 className='md:text-[10px]  xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]' >React.js – Component-based architecture</h3>
  //         <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2' >Tailwind CSS / SCSS – Styling</h3>
  //         <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2' >Context API – State management</h3>
  //         <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2' >Swiper.js – Carousels for product banners</h3>
  //         <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2' >React Icons / Material UI – Icons</h3>
  //         <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[380px] xl:px-2' > Live Demo & GitHub Link
  //        View Live → (Vercel/Netlify deploy)
  //        GitHub Repo → Clean code + README</h3>
  //       </div>
  //         <div className=' border-1 border-white 
  //       w-[400px] md:w-[256px] mt-3 m-auto  '>
  //         <div className=' border-1 border-gray-100 shadow-2xl   
  //       w-[390px] h-[550px]  sm:w-[300px] sm:h-[800px]  md:w-[256px] md:ml-[10px] md:h-[580px] xl:w-[400px] xl:h-[800px] font-medium bg-white py-3   px-8 '>
  //         <img src={img2} alt="" />
        
  //         <h1 className='font-bold xl:text-[23px] font-serif mt-2 md:text-[10px]  '>1  Title:-  <span>SundownStudioProject  </span> </h1>
  //           <h1 className='mt-4 text-2xl md:mt-2 md:text-[15px] xl:text-[23px] sm:mt-1 sm:text-[20px] '>2 Description:- </h1><span className=' xl:text-[15px] xl:w-[380px]   md:text-[12px] md:line-clamp-5 md:w-[200px] sm:text-[14px]'>A fully responsive SundownStudio Project frontend with smooth animations, interactive Project </span>
  //           <h1 className='mt-4 text-2xl md:text-[12px] md:mt-2 xl:text-[23px] sm:mt-1 sm:text-[20px]'>4   Tech Stack</h1>
  //         <h3 className='md:text-[12px] xl:text-[15px] xl:px-2 sm:text-[15px] ' > CSS – Styling</h3>
  //         <h3 className='md:text-[12px] xl:text-[15px] xl:px-2 sm:text-[15px] ' >Swiper.js – Carousels for product banners</h3>
  //         <h3 className='md:text-[12px] xl:text-[15px] xl:px-2 sm:text-[15px] ' > Live Demo & GitHub Link
  //        View Live → (Vercel/Netlify deploy)
  //        GitHub Repo → Clean code + README</h3>
        
        
  //       </div>
  //       </div>
  //       <div className=' border-1 border-white 
  //       w-[400px] sm:mt-5 mt-3  m-auto'>
  //         <div className=' border-1 border-gray-100 shadow-2xl   
  //       w-[390px] sm:w-[300px] md:h-[580px] md:ml-5 md:w-[256px] font-medium bg-white py-1 h-[700px]  px-8 xl:w-[400px] xl:h-[800px]  '>
  //         <img src={img3} alt="" className='sm:w-[300px] sm:h-[250px] m-auto sm:py-5 ' />
        
  //         <h1 className='font-bold text-1xl font-serif mt-2 md:text-[10px] sm:text-[15px] xl:text-2xl '>1  Title:-  <span>Alarm Clock Project  </span> </h1>
  //           <h1 className='mt-4 text-2xl md:mt-2 md:text-[18px] sm:text-[20px] sm:mt-1 xl:text-2xl'>2 Description:- </h1><span className='md:text-[10px] md:line-clamp-4 xl:text-[15px] xl:px-2 sm:text-[14px]'>A fully responsive Alarm Clock Project frontend Project By Using HTML, CSS, JS </span>
  //           <h1 className='mt-4 text-2xl md:text-[18px] md:mt-2 xl:text-2xl sm:text-[20px] sm:mt-1 '>4   Tech Stack</h1>
  //         <h3 className='md:text-[10px] xl:text-[15px] xl:px-2 sm:text-[14px]'> CSS – Styling</h3>
  //         <h3 className='md:text-[10px] xl:text-[15px] xl:px-2 sm:text-[14px] '> Live Demo & GitHub Link
  //        View Live → (Vercel/Netlify deploy)
  //        GitHub Repo → Clean code + README</h3>
        
        
  //       </div>
  //       </div>
  //       </div>


  //       {/* <div className='flex justify-center text-5xl font-bold  '> <h1>Mini Project</h1></div>
  // <div className='flex m-auto gap-5 '>
  //       <div className=' border-1 border-gray-100 shadow-2xl   
  //       w-[400px] py-4 px-8 font-medium bg-white  '>
  //         <img src={img} alt="" />
  //         <h1 className='font-bold text-2xl font-serif mt-2 '>1  Title:-  <span>E-Commerce Project  </span> </h1>
  //         <h1 className='mt-4 text-2xl'>2 Description:- </h1><span>A fully responsive e-commerce frontend with smooth animations, interactive product cards, and a clean shopping experience.</span>
  //         <h1 className='mt-4 text-2xl'>3 Features:- </h1><span> Responsive Design (mobile-first approach) </span>
  //         <h3>Search Bar with Suggestions</h3>
  //         <h3>State Management (Context API)</h3>
  //         <h3>Data Fetching from API (dummyJSON, fakestoreapi, etc.)</h3>
  //         <h3>Add To Cart</h3>
  //         <h3>View To Cart</h3>

          
  //       </div> */}
  //       {/* </div> */}
        
  //     </div>
  //   )
  // }

  // export default Portfolio




//   import React from 'react'
// import img from '../assets/WhatsApp-image .jpg'
// import img2 from '../assets/Screenshot.png'
// import img3 from '../assets/clockImg.png'

// const Portfolio = () => {
//   return (
//     <div className='2xl:px-[18px] bg-black sm:px-4 w-full min-h-screen py-10'>

//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        
//         {/* E-Commerce Project */}
//         <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden m-auto'>
//           <img src={img} alt="" className='w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl' />  
//           <div className='p-6 flex flex-col flex-1'>
//             <h1 className='font-bold text-2xl md:text-3xl font-serif mt-2 text-white'>1 Title:- <span className='text-white/80'>E-Commerce Project</span></h1>
//             <h1 className='mt-4 text-xl md:text-2xl text-white'>2 Description:-</h1>
//             <span className='text-white/80 mt-1 block'>A fully responsive e-commerce frontend with smooth animations, interactive product cards, and a clean shopping experience.</span>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>3 Features:-</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1'>
//               <li>Responsive Design (mobile-first approach)</li>
//               <li>Search Bar with Suggestions</li>
//               <li>State Management (Context API)</li>
//               <li>Data Fetching from API (dummyJSON, fakestoreapi, etc.)</li>
//               <li>Add To Cart</li>
//               <li>View To Cart</li>
//             </ul>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>4 Tech Stack</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1'>
//               <li>React.js – Component-based architecture</li>
//               <li>Tailwind CSS / SCSS – Styling</li>
//               <li>Context API – State management</li>
//               <li>Swiper.js – Carousels for product banners</li>
//               <li>React Icons / Material UI – Icons</li>
//               <li>Live Demo & GitHub Link</li>
//             </ul>
//           </div>
//         </div>

//         {/* SundownStudio Project */}
//         <div className='bg-white/10 backdrop-blur-xl min-h-[100vh] border border-white/20 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden m-auto'>
//           <img src={img2} alt="" className='w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl' />
//           <div className='p-6 flex flex-col flex-1'>
//             <h1 className='font-bold text-2xl md:text-3xl font-serif mt-2 text-white'>1 Title:- <span className='text-white/80'>SundownStudio Project</span></h1>
//             <h1 className='mt-4 text-xl md:text-2xl text-white'>2 Description:-</h1>
//             <span className='text-white/80 mt-1 block'>A fully responsive SundownStudio Project frontend with smooth animations, interactive Project.</span>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>4 Tech Stack</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1'>
//               <li>CSS – Styling</li>
//               <li>Swiper.js – Carousels for project banners</li>
//               <li>Live Demo & GitHub Link</li>
//             </ul>
//           </div>
//         </div>

//         {/* Alarm Clock Project */}
//         <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col h-[100vh] m-auto '>
//           <img src={img3} alt="" className='w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl' />
//           <div className='p-6 flex flex-col flex-1'>
//             <h1 className='font-bold text-2xl md:text-3xl font-serif mt-2 text-white'>1 Title:- <span className='text-white/80'>Alarm Clock Project</span></h1>
//             <h1 className='mt-4 text-xl md:text-2xl text-white'>2 Description:-</h1>
//             <span className='text-white/80 mt-1 block'>A fully responsive Alarm Clock Project frontend by using HTML, CSS, JS.</span>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>4 Tech Stack</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1'>
//               <li>CSS – Styling</li>
//               <li>Live Demo & GitHub Link</li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Portfolio



// import React from 'react'
// import img from '../assets/WhatsApp-image .jpg'
// import img2 from '../assets/Screenshot.png'
// import img3 from '../assets/clockImg.png'

// const Portfolio = () => {
//   return (
//     <div className='2xl:px-[18px] bg-black sm:px-4 w-full min-h-screen py-10'>

//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>

//         {/* E-Commerce Project */}
//         <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden h-full'>
//           <img src={img} alt="" className='w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl' />
//           <div className='p-6 flex flex-col flex-1'>
//             <h1 className='font-bold text-2xl md:text-3xl font-serif mt-2 text-white'>1 Title:- <span className='text-white/80'>E-Commerce Project</span></h1>
//             <h1 className='mt-4 text-xl md:text-2xl text-white'>2 Description:-</h1>
//             <span className='text-white/80 mt-1 block'>A fully responsive e-commerce frontend with smooth animations, interactive product cards, and a clean shopping experience.</span>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>3 Features:-</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1 flex-1'>
//               <li>Responsive Design (mobile-first approach)</li>
//               <li>Search Bar with Suggestions</li>
//               <li>State Management (Context API)</li>
//               <li>Data Fetching from API (dummyJSON, fakestoreapi, etc.)</li>
//               <li>Add To Cart</li>
//               <li>View To Cart</li>
//             </ul>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>4 Tech Stack</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1'>
//               <li>React.js – Component-based architecture</li>
//               <li>Tailwind CSS / SCSS – Styling</li>
//               <li>Context API – State management</li>
//               <li>Swiper.js – Carousels for product banners</li>
//               <li>React Icons / Material UI – Icons</li>
//               <li>Live Demo & GitHub Link</li>
//             </ul>
//           </div>
//         </div>

//         {/* SundownStudio Project */}
//         <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden h-full'>
//           <img src={img2} alt="" className='w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl' />
//           <div className='p-6 flex flex-col flex-1'>
//             <h1 className='font-bold text-2xl md:text-3xl font-serif mt-2 text-white'>1 Title:- <span className='text-white/80'>SundownStudio Project</span></h1>
//             <h1 className='mt-4 text-xl md:text-2xl text-white'>2 Description:-</h1>
//             <span className='text-white/80 mt-1 block'>A fully responsive SundownStudio Project frontend with smooth animations, interactive Project.</span>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>4 Tech Stack</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1 flex-1'>
//               <li>CSS – Styling</li>
//               <li>Swiper.js – Carousels for project banners</li>
//               <li>Live Demo & GitHub Link</li>
//             </ul>
//           </div>
//         </div>

//         {/* Alarm Clock Project */}
//         <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden h-full'>
//           <img src={img3} alt="" className='w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl' />
//           <div className='p-6 flex flex-col flex-1'>
//             <h1 className='font-bold text-2xl md:text-3xl font-serif mt-2 text-white'>1 Title:- <span className='text-white/80'>Alarm Clock Project</span></h1>
//             <h1 className='mt-4 text-xl md:text-2xl text-white'>2 Description:-</h1>
//             <span className='text-white/80 mt-1 block'>A fully responsive Alarm Clock Project frontend by using HTML, CSS, JS.</span>

//             <h1 className='mt-4 text-xl md:text-2xl text-white'>4 Tech Stack</h1>
//             <ul className='text-white/80 list-disc list-inside mt-1 flex-1'>
//               <li>CSS – Styling</li>
//               <li>Live Demo & GitHub Link</li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Portfolio





import React from 'react'
import img from '../assets/WhatsApp-image .jpg'
import img2 from '../assets/Screenshot.png'
import img3 from '../assets/clockImg.png'
import img4 from '../assets/Untitled.png'


const Portfolio = () => {
  return (
    <div className='2xl:px-[18px] bg-gray-700 sm:px-2 w-full min-h-screen py-10'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-[85%] m-auto gap-8'>

        {/* E-Commerce Project */}
        <div className='border border-gray-100 shadow-2xl sm:w-[300px] sm:h-[800px] lg:w-[400px] xl:w-[400px] xl:min-h-[800px] sm:py-4 lg:py-4 xl:py-4 px-8 font-medium bg-gray-100 md:w-[256px] md:h-[580px] md:px-5 md:py-2 mt-5 h-[800px] w-[390px] m-auto'>
          <img src={img} alt="" />
          <h1 className='font-bold text-2xl md:text-[10px] lg:text-2xl xl:text-2xl font-serif mt-2'>1 Title:- <span>E-Commerce Project</span></h1>
          <h1 className='mt-4 text-2xl md:text-2xl sm:text-[20px]'>2 Description:- </h1>
          <span className='md:text-[10px] xl:text-[15px] xl:w-[380px] md:line-clamp-6 md:w-[150px] xl:px-2 sm:text-[14px]'>
            A fully responsive e-commerce frontend with smooth animations, interactive product cards, and a clean shopping experience.
          </span>

          <h1 className='mt-4 text-2xl md:text-[15px] sm:text-[20px]'>3 Features:- </h1>
          <span className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>Responsive Design (mobile-first approach)</span>
          <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>Search Bar with Suggestions</h3>
          <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>State Management (Context API)</h3>
          <h3 className='md:text-[10px] xl:text-[15px] xl:w-[380px] xl:px-2 sm:text-[14px]'>Data Fetching from API (dummyJSON, fakestoreapi, etc.)</h3>
          <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>Add To Cart</h3>
          <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>View To Cart</h3>

          <h1 className='mt-4 text-2xl md:text-[15px] sm:text-[20px]'>4 Tech Stack</h1>
          <h3 className='md:text-[10px] xl:text-[15px] xl:w-[450px] xl:px-2 sm:text-[14px]'>React.js – Component-based architecture</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2'>Tailwind CSS / SCSS – Styling</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2'>Context API – State management</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2'>Swiper.js – Carousels for product banners</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[450px] xl:px-2'>React Icons / Material UI – Icons</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[380px] xl:px-2'> Vercel Live Demo :- <a href="https://e-commerceproject77.vercel.app/" target="_blank" className="text-blue-700 font-semibold text-[18px]">https://e-commerceproject77.vercel.app/</a></h3>
           
        </div>

        {/* SundownStudio Project */}
        <div className='border border-gray-100 shadow-2xl w-[390px] h-[550px] sm:w-[300px] sm:h-[800px] md:w-[256px] md:h-[580px] xl:w-[400px] xl:h-[800px] font-medium bg-gray-100 py-3 px-8 m-auto mt-5'>
          <img src={img2} alt="" />
          <h1 className='font-bold xl:text-[23px] font-serif mt-2 md:text-[10px]'>1 Title:- <span>SundownStudio Project</span></h1>
          <h1 className='mt-4 text-2xl md:text-[15px] sm:text-[20px]'>2 Description:- </h1>
          <span className='xl:text-[15px] xl:w-[380px] md:text-[12px] md:line-clamp-5 md:w-[200px] sm:text-[14px]'>
            A fully responsive SundownStudio Project frontend with smooth animations, interactive Project
          </span>
          <h1 className='mt-4 text-2xl md:text-[12px] sm:text-[20px]'>4 Tech Stack</h1>
          <h3 className='md:text-[12px] xl:text-[15px] xl:px-2 sm:text-[15px]'>CSS – Styling</h3>
          <h3 className='md:text-[12px] xl:text-[15px] xl:px-2 sm:text-[15px]'>Swiper.js – Carousels for project banners</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[380px] xl:px-2'> Vercel Live Demo :- <a href="  https://sundownstudio-beta.vercel.app/" target="_blank" className="text-blue-700 font-semibold text-[18px]">  https://sundownstudio-beta.vercel.app/</a></h3>
        
        </div>

        {/* Alarm Clock Project */}
        <div className='border border-gray-100 shadow-2xl w-[390px] sm:w-[300px] md:w-[256px] md:h-[580px] xl:w-[400px] xl:h-[800px] font-medium bg-gray-100 py-1 px-8 m-auto h-[700px] mt-5'>
          <img src={img3} alt="" className='sm:w-[300px] sm:h-[250px] m-auto sm:py-5' />
          <h1 className='font-bold text-1xl font-serif mt-2 md:text-[10px] sm:text-[15px] xl:text-2xl'>1 Title:- <span>Alarm Clock Project</span></h1>
          <h1 className='mt-4 text-2xl md:text-[18px] sm:text-[20px] sm:mt-1 xl:text-2xl'>2 Description:- </h1>
          <span className='md:text-[10px] md:line-clamp-4 xl:text-[15px] xl:px-2 sm:text-[14px]'>
            A fully responsive Alarm Clock Project frontend Project By Using HTML, CSS, JS
          </span>
          <h1 className='mt-4 text-2xl md:text-[18px] sm:text-[20px] sm:mt-1 xl:text-2xl'>4 Tech Stack</h1>
          <h3 className='md:text-[10px] xl:text-[15px] xl:px-2 sm:text-[14px]'>CSS – Styling</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[380px] xl:px-2'> Vercel Live Demo :- <a href="  https://alarmclock-woad.vercel.app/" target="_blank" className="text-blue-700 font-semibold text-[18px]">  https://https://alarmclock-woad.vercel.app/</a></h3>
        </div>
  {/* *********************************************************************************** */}

<div className='border border-gray-100 shadow-2xl w-[390px] sm:w-[300px] md:w-[256px] md:h-[580px] xl:w-[400px] xl:h-[800px] font-medium bg-gray-100 py-1 px-8 m-auto h-[700px] mt-5'>
          <img src={img4} alt="" className='sm:w-[300px] sm:h-[250px] m-auto sm:py-5' />
          <h1 className='font-bold text-1xl font-serif mt-2 md:text-[10px] sm:text-[15px] xl:text-2xl'>1 Title:- <span>E-commerce Project</span></h1>
          <h1 className='mt-4 text-2xl md:text-[18px] sm:text-[20px] sm:mt-1 xl:text-2xl'>2 Description:- </h1>
          <span className='md:text-[10px] md:line-clamp-4 xl:text-[15px] xl:px-2 sm:text-[14px]'>
            A fully responsive E-commerce Project frontend Project By Using HTML, CSS, JS
          </span>
          <h1 className='mt-4 text-2xl md:text-[18px] sm:text-[20px] sm:mt-1 xl:text-2xl'>4 Tech Stack</h1>
          <h3 className='md:text-[10px] xl:text-[15px] xl:px-2 sm:text-[14px]'>CSS – Styling</h3>
          <h3 className='md:text-[10px] sm:text-[14px] xl:text-[15px] xl:w-[380px] xl:px-2'> Vercel Live Demo :- <a href="  https://ecommerce-project-five-gamma.vercel.app/" target="_blank" className="text-blue-700 font-semibold text-[18px]"> https://ecommerce-project-five-gamma.vercel.app/</a></h3>
        </div>

      </div>
    </div>
  )
}

export default Portfolio










