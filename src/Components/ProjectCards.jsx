import React from 'react'
import { register } from 'swiper/element/bundle';
register();

function ProjectCards({src,Title,Content}) {
  return (


          <div className="bg-gray-800    rounded-lg  mr-2 overflow-hidden h-[550px] w-[300px]" >
            <img src={src} alt=""
            className="object-cover  shadow-lg
         h-[450px] w-full
            "/>
            <h3>{Title}</h3>
            <p>{Content}</p>
          </div>
         
          
         
  )
}

export default ProjectCards
