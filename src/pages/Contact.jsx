import React from 'react'
import {useRef} from 'react'
import toast from 'react-hot-toast';
// import image from '../assets/formimg.png'

const Contact = () => {
  let nameRef=useRef();
  let emailRef=useRef();
  let numberRef=useRef();
  let addressRef=useRef();
  let subjectRef=useRef();
  


let arr=JSON.parse(localStorage.getItem('portfolio')) || []
console.log(arr)

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log('hello')
    let obj={
      yourname:nameRef.current.value,
      youremail:emailRef.current.value,
      yournumber:numberRef.current.value,
      youraddress:addressRef.current.value,
      yoursubject:subjectRef.current.value,
      
    }
    console.log(obj)

    toast.success('Successfully Submitted!***')

    if(obj.yourname && obj.youremail && obj.yournumber&& obj.youraddress && obj.yoursubject){
      let find=arr.find((ele)=>ele.youremail===obj.youremail);
      if(find){
        return ('user already registered')
      }
      else{
        arr.push(obj)
        localStorage.setItem('portfolio',JSON.stringify(arr))
      }
      
    }
    else{
      alert('please fill all the fields')
    }
     }
  return (
    
    <div className=' bg-no-repeat bg-cover w-[100%] h-[100vh] bg-black '>
      <div className="text-center w-[100%]  text-5xl py-2  ">
        <h1 className='text-white md:mt-2 '>Contact</h1>
      </div>
      <div className="w-[100%]  relative ">
        <div className="lg:right-[50%] right-[23%]  absolute w-[180px] md:w-[160px]  md:left-[40%]  h-[4px] bg-[#34B7A7] xl:left-[43%] xl:w-[180px] "></div>
      </div>
      
      <div className='flex w-[100%] justify-center '>
      <form action="" className='flex flex-col w-[90%] lg:w-[70%] md:w-[95%] gap-5  md:py-[40px] md:px-[30px]  lg:px-[80px] lg:py-[40px] h-[80vh] md:h-[80vh] items-center border-1 px-2  rounded-[8px]  shadow-4xl md:mt-2 mt-8'>
        
        <input  ref={nameRef} className='  border-b-1 px-3 py-2 text-[18px] placeholder:text-gray-300  text-white rounded-[2px] outline-0  w-[100%] caret-white' type="text" name="name" id="" placeholder='enter your name' />
        <input ref={emailRef} className=' text-white border-b-1 px-3  text-[18px] placeholder:text-gray-300 rounded-[2px] outline-0  w-[100%] caret-white' type="text" name="" id="" placeholder='enter your email' />
        <input ref={numberRef} className=' text-white border-b-1 px-3  text-[18px] placeholder:text-gray-300 rounded-[2px]outline-0 caret-white  w-[100%]' type="text" name="" id="" placeholder='enter your number' />
        <input ref={addressRef} className=' text-white border-b-1 px-3  text-[18px] placeholder:text-gray-300 rounded-[2px] outline-0 caret-white  w-[100%] ' type="text" name="" id="" placeholder='enter your address' />
        <textarea  ref={subjectRef} className=' text-white h-[50px] border-b-2 px-3 text-[18px] placeholder:text-gray-300 rounded-[2px] outline-0 caret-white w-[100%]  cols="50" rows="5"  '  name="" id="" placeholder='Type your message here...'></textarea>
       <button onClick={handleSubmit} className='px-3  text-[25px] rounded-[3px] border-b-1 text-white w-[100%] bg-[#34B7A7] shadow-5xl '>Sumbit</button>
      </form></div>
    

     
    </div>
  )
}

export default Contact




