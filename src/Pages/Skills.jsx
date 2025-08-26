import React from 'react'
import { Code, Palette, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";



function Skills() {


  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS,Angular",
      percentage: 90,
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      percentage: 85,
    },
    {
      icon: Palette,
      title: "Agentic AI",
      description: "LangChain,LangGraph, Agentic Systems",
      percentage: 40,
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      description: "AWS, Docker, CI/CD, Kubernetes",
      percentage: 55,
    },
  ];


  return (
    <section className='bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
relative scroll-overlay-page2 min-h-screen py-20
    '>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
           whileInView={{opacity:1,y:0}}
  initial={{opacity:0,y:-100}}
  transition={{duration:0.5}}
          className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Skills
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and Tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover-scale"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4">
                  <skill.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                whileInView={{opacity:1,x:0}}
  initial={{opacity:0,x:-100}}
  transition={{duration:0.5}}
                  className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-500
 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                ></motion.div>
              </div>
              <div className="text-right mt-2">
                <span className="text-sm text-gray-400">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      
    </section>
  )
}

export default Skills
