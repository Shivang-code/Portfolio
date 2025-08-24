import React from 'react'
import { motion } from 'framer-motion'

function Exprience() {

const[repos,setRepos]=React.useState([])
React.useEffect(()=>{
  fetch("https://api.github.com/users/Shivang-code/repos")
  .then((res)=>res.json())
  .then((data)=>setRepos(data))
  .catch((err)=>console.log(err))


}
,[])


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
        
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{repo.name}</h3>
            <p className="text-sm text-gray-600">
              {repo.description || "No description available"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Exprience
