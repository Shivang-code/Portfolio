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
      {/* GitHub */}
      <motion.a 
        href="https://github.com/Shivang-code" 
        aria-label="GitHub"
        target="_blank" 
        rel="noopener noreferrer"
        className='border-2 border-white p-2 rounded-full text-xl hover:bg-white hover:text-black transition'
        animate={floatAnimation}
        
      >
        <FaGithub />
      </motion.a>

      {/* LinkedIn */}
      <motion.a 
        href="https://www.linkedin.com/in/shivang-tyagi-52391a249/" 
        target="_blank" 
        rel="noopener noreferrer"
        className='border-2 border-white p-2 rounded-full text-xl hover:bg-white hover:text-blue-600 transition'
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.3 } }}
      >
        <FaLinkedin />
      </motion.a>

      {/* Twitter */}
      <motion.a 
        href="https://x.com/ShivangTya14329" 
        target="_blank" 
        rel="noopener noreferrer"
        className='border-2 border-white p-2 rounded-full text-xl hover:bg-white hover:text-sky-500 transition'
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.6 } }}
      >
        <FaTwitter />
      </motion.a>

      {/* Instagram */}
      <motion.a 
        href="https://www.instagram.com/shivangtyagii/?next=%2F" 
        target="_blank" 
        rel="noopener noreferrer"
        className='border-2 border-white p-2 rounded-full text-xl hover:bg-white hover:text-pink-500 transition'
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.9 } }}
      >
        <FaInstagram />
      </motion.a>
    </div>
  );
}

export default Links;
