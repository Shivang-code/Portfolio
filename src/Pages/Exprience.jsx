import React from 'react'
import { motion } from 'framer-motion'

function Exprience() {
  return (
    <section
    id="experience"
    className='bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white
relative scroll-overlay-page2 min-h-screen '>

          <div className="text-center mb-16
        mt-0
        ">
          <motion.h2 
                    whileInView={{opacity:1,y:0}}
  initial={{opacity:0,y:-100}}
  transition={{duration:1}}
          
          className="text-4xl md:text-5xl font-bold text-white mb-4 pt-7">
            Experience
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The following is a list of my experiences
          </p>
        </div>
        
      
    </section>
  )
}

export default Exprience
