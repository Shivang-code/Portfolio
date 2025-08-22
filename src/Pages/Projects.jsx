import firstImg from "../assets/picture/annie-spratt-fbAnIjhrOL4-unsplash.jpg"
import SecondImg from "../assets/picture/diego-ph-fIq0tET6llw-unsplash.jpg"
import thirdImg from "../assets/picture/matthew-henry-U5rMrSI7Pn4-unsplash.jpg"
import fourthImg from "../assets/picture/florian-klauer-mk7D-4UCfmg-unsplash.jpg"
import fifthImg from "../assets/picture/mark-adriane-muS2RraYRuQ-unsplash.jpg"
import sixthImg from "../assets/picture/raimond-klavins-uAk731NvaJo-unsplash.jpg"
import ProjectCards from "../Components/ProjectCards";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
// transparentbf-[#0f172a]
function Projects() {

const myProjects = [
  {
    src: firstImg,
    Title: "First Project",
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima?"
  },
  {
    src: SecondImg,
    Title: "Second Project",
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima?"
  },
  {
    src: thirdImg,
    Title: "Third Project",
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima?"
  },
  {
    src: fourthImg,
    Title: "Fourth Project",
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima?"
  },
  {
    src: fifthImg,
    Title: "Fifth Project",
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima?"
  },
  {
    src: sixthImg,
    Title: "Sixth Project",
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minima?"
  }
];




  return (
    <section 
    id="projects"
    className='bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white
relative scroll-overlay-page2 min-h-screen pt-20'>
      
        <div className="text-center mb-16">
          <motion.h2 
                    whileInView={{opacity:1,y:0}}
  initial={{opacity:0,y:-100}}
  transition={{duration:1}}
          
          className="text-4xl md:text-5xl font-bold text-white mb-4 pt-7">
            Projects
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projects I have worked on and am currently working on.
          </p>
        </div>
      <Swiper
  spaceBetween={20}
  loop={true}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    320: { // mobile
      slidesPerView: 1,
    },
    640: { // small tablets
      slidesPerView: 1,
    },
    768: { // tablets
      slidesPerView: 2,
    },
    1024: { // laptops
      slidesPerView: 3,
    },
    1280: { // large desktops
      slidesPerView: 4,
    },
  }}
      >

{
        myProjects.map((project,index)=>(
            <SwiperSlide key={index}>
          <ProjectCards
          key={index}
          src={project.src}
          Title={project.Title}
          Content={project.Content}
          />
          </SwiperSlide>
        ))
}


 
   </Swiper>
          
              
    </section>
  )
}

export default Projects