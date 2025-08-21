import React from 'react';
import Home from '../Components/Home';
import Links from '../Components/Links';
import { motion } from 'framer-motion'


function HomePage() {
  const sliderVariant = {
    initial: { x: 0 },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear"
      },
    },
  };
  return (

    <section 
    id='homepage'
    className='scroll-fixed-page'>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-800
 min-h-screen text-white overflow-hidden  w-full "
      >


        <Home />

        <div className='absolute right-4 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
          <Links />



        </div>

        <motion.div className="absolute text-[50vh] bottom-[-40px] whitespace-nowrap text-[#ffffff09] font-bold w-[50%]" variants={sliderVariant} initial="initial" animate="animate">
          Web Agents Debug</motion.div>

      </div>
    </section>
  )
}

export default HomePage
