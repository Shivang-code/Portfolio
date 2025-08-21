import React from 'react'
import myImage from '../assets/picture/Shivang_Black.jpeg'
import normalImg from '../assets/picture/Shivang_Normal.jpeg'

function AboutMe() {

  const [hover,setHover] = React.useState(false);

  return (
    <section id='about'
    className='bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
relative scroll-overlay-page min-h-screen'>
      <div className='flex flex-row  h-[100vh]'>
        <div className='w-1/2  h-[100%] overflow-hidden relative'>
<img src={hover?normalImg:myImage} alt="no img" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='h-full w-full object-cover' />
        </div>
        <div className='w-1/2 flex text-white
        justify-center items-start  flex-col pl-20 pr-5
        '>

  <h2 className='text-xl text-sky-400 font-bold mb-5 border-2 border-sky-400 p-3 rounded-full'>About Me</h2>
  

          <p className='text-lg'>
            Hello! I'm Shivang, a passionate Full Stack Developer with a keen interest in building dynamic and responsive web applications. I thrive on challenges and love to learn new technologies. My journey in web development has equipped me with a diverse skill set, enabling me to create seamless user experiences and robust back-end solutions.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default AboutMe
