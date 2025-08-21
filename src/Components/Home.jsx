import React from 'react'
import Typewriter from "typewriter-effect";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


function Home() {
  return (
    <div
    id='home'
    className='flex flex-row justify-center items-center h-screen relative'>
      <div className='p-8 mt-14 flex flex-col justify-center items-center text-xl'>
<div className='text-4xl'>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent p-3">
         Shivang Tyagi,
      </h1>

      <p className='text-3xl mt-1 p-3'>
         A Full Stack Developer

      </p>
      <div className='text-2xl p-3'>
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
</div>
      </div>
    </div>
  )
}

export default Home
