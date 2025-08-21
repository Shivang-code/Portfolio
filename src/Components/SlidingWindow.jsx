import React from 'react'
import { motion } from 'framer-motion';

function SlidingWindow() {
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

      <motion.div className="absolute text-[50vh] bottom-[-85px] whitespace-nowrap text-[#ffffff09] font-bold w-[50%] font-bold" variants={sliderVariant} initial="initial" animate="animate">
  Writer Content Influencer</motion.div>

  )
}

export default SlidingWindow
