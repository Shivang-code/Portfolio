import React from 'react'
import { register } from 'swiper/element/bundle';
register();

function ProjectCards({ src, Title, Content }) {
  const [hovered, setHovered] = React.useState(false);

  
  return (
    <div
      className="relative rounded-lg overflow-hidden h-[650px] w-[450px] transition duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={src}
        alt=""
        className={`object-cover shadow-lg h-[650px] w-full transition duration-300 ${
          hovered ? "blur-md" : ""
        }`}
      />

      {/* Text overlay (only when hovered) */}
      {hovered && (
        <div className="absolute inset-0 flex flex-col text-white bg-black/40 px-4
        justify-end py-6 transition duration-300
        ">
          <h3 className="text-2xl font-bold">{Title}</h3>
          <p className="text-lg mt-2">{Content}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
