import React from 'react'
import { motion } from "framer-motion";
import ProjectCards from '../Components/ProjectCards';
import ExperienceCard from '../Components/ExperienceCard';

function Exprience() {

const experiences = [
  {
company:"Algocept",
role:"Web Developer Intern",
type:"Remote Internship",
duration:"May 2025 - July 2025",
description:"Worked on developing and maintaining web applications using React.js and Node.js. Collaborated with the design team to implement user-friendly interfaces and improve website performance.",
skills:["React.js","Node.js","JavaScript","HTML","CSS"]
  },
  {
company:"City of moreton bay",
role:"Web Developer Intern",
type:"Virtual Internship",
duration:"Task Based",
description:"Designed and developed a volunteer landing page and registration form for a nonprofit website using HTML and CSS. Conducted research on nonprofit site structures, created a sitemap and user flow, and implemented a clean, user-friendly layout with responsive design",
  skills:["Critical Thinking","css","HTML","Site Mapping","User Flow","Web Development","WordPress"]
  },
  {
company:"Datacom",
role:"Software Engineer Intern",
type:"Virtual Internship",
duration:"Task Based",
description:"Completed a simulation focussed on how the software development team at Datacom approaches their work.Reviewed a web application and planned for future improvementsIdentified the root cause of bugs and implemented a fix to improve the application",
  skills:["Critical Thinking","Developer Tools","Root Cause Analysis","Software Development","Software Review","Written Communication"]
  }

];


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

        <div className='container mx-auto px-4 py-16'>
                  <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
          {
            experiences.map((experience,index)=>(
       <ExperienceCard
       key={index}
       company={experience.company}
       role={experience.role}
       duration={experience.duration}
      description={experience.description}
      skills={experience.skills}
      isLast={index === experiences.length - 1}
       type={experience.type}
       />
            ))
          }

        </div>
        </div>
        </div>
  
    </section>
  )
}

export default Exprience
