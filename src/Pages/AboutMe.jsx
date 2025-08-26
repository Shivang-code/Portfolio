import React from 'react'
import myImage from '../assets/picture/Shivang_Black.jpeg'
import normalImg from '../assets/picture/Shivang_Normal.jpeg'
import {motion} from 'framer-motion'

function AboutMe() {

  const [hover,setHover] = React.useState(false);

  return (
    <section id='about'
    className='bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
relative scroll-overlay-page min-h-screen'>
      <div className='flex flex-col md:flex-row h-auto md:h-[100vh]'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
  initial={{opacity:0,x:-100}}
  transition={{duration:1}}
        className='w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden flex justify-center items-center'>
<img src={hover?normalImg:myImage} alt="no img" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='h-full w-full object-cover' />
        </motion.div>
        <div className='w-full md:w-1/2 flex flex-col text-white py-10 px-5 sm:px-10 md:px-20 justify-center items-start'>

  <motion.h2 
  whileInView={{opacity:1,x:0}}
  initial={{opacity:0,x:100}}
  transition={{duration:1}}
  
  className=' text-base sm:text-lg md:text-2xl text-sky-400 font-bold mb-5 border-2 border-sky-400 p-3 rounded-full'>About Me</motion.h2>
  

          <motion.p 
          whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        
          className='text-base sm:text-lg md:text-xl leading-relaxed'>
            Hello! I'm Shivang, a passionate Full Stack Developer with a keen interest in building dynamic and responsive web applications. I thrive on challenges and love to learn new technologies. My journey in web development has equipped me with a diverse skill set, enabling me to create seamless user experiences and robust back-end solutions.
          </motion.p>
        </div>
      </div>
      
    </section>
  )
}

export default AboutMe
