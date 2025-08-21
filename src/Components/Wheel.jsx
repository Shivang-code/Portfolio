import React from 'react'
import { motion } from "motion/react"

function Wheel() {
    const [rotated, setRotated] = React.useState(false);

    const gearBtn = () => {
        // Logic for handling the click event
        setRotated(!rotated);
    };
  return (
    <div>
    <div 
    onClick={gearBtn}
    className="text-4xl inline-block cursor-pointer hover:scale-110 ">
   { rotated?<motion.div animate={{ rotate: 360 }}
   transition={{ duration: 1, ease: "easeInOut" }}
   >
        ⚙️
        </motion.div>:<div>
        ⚙️
        </div>}
            <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      className="w-12 h-12 text-red-500"
      stroke="currentColor"
      strokeWidth="3"
      initial={{ y: 10 }}
      animate={{ y: [10, 0, 10] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    >
      <path
        d="M90 50 C20 50, 60 50, 50 10 M50 10 L42 20 M50 10 L62 20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
     </div>
     <div>know me</div>
     </div>
  )
}

export default Wheel
