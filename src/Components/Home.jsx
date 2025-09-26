import React from 'react'
import Typewriter from "typewriter-effect";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CV from "../assets/picture/Shivang_Tyagi_MCA_Resume .pdf"


function Home() {
  return (
    <div
    id='home'
    className='flex flex-row justify-center items-center h-screen relative'>
      <div className='p-8 mt-14 flex flex-col justify-center items-center text-xl'>
<div className='md:text-4xl sm:text-2xl'>
        <h1 className="md:text-6xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent p-3">
         Shivang Tyagi,
      </h1>

      <p className='md:text-3xl sm:text-xl mt-1 p-3'>
         A Full Stack Developer

      </p>
      <div className='md:text-2xl sm:text-lg p-3'>
        I can code in:{" "}
        <ChevronDownIcon className="w-8 h-8 text-white animate-bounce mt-6" />
        <span className="font-semibold text-cyan-400" >
          <Typewriter
          options={{
            strings: ["JavaScript", "React", "Node.js", "Express.js"],
            autoStart: true,
            loop: true,
          }}
       
        />
        </span>
      </div>
      <a 
  className='absolute z-20'
  href={CV} 
  download
>
  <button className="bg-transparent  text-white px-6 py-3 rounded-lg hover:bg-white
  hover:text-blue-400 transition border">
    Resume
  </button>
</a>


</div>

      </div>
   
    </div>
  )
}

export default Home
