import React from 'react'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

function Navbar() {

const[scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  }
}, []);


const scrollToSection=(sectionId)=>{

  
  const element = document.getElementById(sectionId);

  element?.scrollIntoView({
    behavior: 'smooth'})
}



  return (

      
      <nav className='fixed top-0 left-0 right-0 z-50 cursor-pointer'>
        <div className={`flex items-center justify-between 
        ${scrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'} 
        transition-colors duration-300 fixed top-0 left-0 right-0 z-50 p-4`}>
        
          <div className="md:flex space-x-12 text-white text-2xl ">
            <a 
            onClick={() => scrollToSection('about')}
            className="hover:underline hover:text-gray-400">About</a>
            <a 
            onClick={() => scrollToSection('projects')}
            className="hover:underline hover:text-gray-400">Projects</a>
            <a 
            onClick={() => scrollToSection('contact')}
            className="hover:underline hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
