import ProjectCards from "../Components/ProjectCards";
import { useState ,useEffect} from "react"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Projects() {

const[repos,setRepos]=useState([])

useEffect(() => {
  const wantedRepos = [
  "BloggingApp",
  "ExpenseTracker",
  "MarkDown",
  "NetflixClone",
  "PhotoGallery",
  "ReciepeApp",
  "studentCrud",
 
];

  Promise.all(
    wantedRepos.map(name =>
      fetch(`https://api.github.com/repos/Shivang-code/${name}`,{
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
}
      ).then(res => res.json())
    )
  ).then(data => setRepos(data));
}, []);

  return (
    <section 
    id="projects"
    className='bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white
relative scroll-overlay-page2 min-h-screen pt-10 '>
      
        <div className="text-center mb-16
        mt-0
        ">
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
      modules={[Mousewheel, Pagination]}
      direction={"horizontal"}
       mousewheel={{
        forceToAxis:true,
        releaseOnEdges:true
       }}    
  spaceBetween={20}
  loop={true}
 centeredSlides={true}
 slidesPerView="auto"
  pagination={{ clickable: true }}

      >

{
        repos.map((repo,index)=>(
            <SwiperSlide key={index}
            style={{ width: "450px" }}
            >
          <ProjectCards
          Title={repo.name}
          Content={repo.description}
          url={repo.html_url}
          image={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/preview.png`}
          
          />
          </SwiperSlide>
        ))
}


 
   </Swiper>
          
          
    </section>
  )
}

export default Projects