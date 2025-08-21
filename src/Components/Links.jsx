import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Links() {
  const floatAnimation = {
    y: [0, -10, 0], // moves up, then back to start
    transition: {
      duration: 2, // time for one full up/down
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <motion.div 
        className='border-2 border-white p-2 rounded-full'
        animate={floatAnimation}
      >
       <FaGithub />
      </motion.div>

      <motion.div 
        className='border-2 border-white p-2 rounded-full'
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.3 } }}
      >
       <FaLinkedin />
      </motion.div>

      <motion.div 
        className='border-2 border-white p-2 rounded-full'
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.6 } }}
      >
        <FaTwitter />
      </motion.div>
            <motion.div 
        className='border-2 border-white p-2 rounded-full'
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.9 } }}
      >
        <FaInstagram />
      </motion.div>
    </div>
  );
}

export default Links;
