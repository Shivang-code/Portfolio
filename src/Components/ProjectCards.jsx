import React from 'react'


function ProjectCards({Title, Content,url,image}) {
  const [hovered, setHovered] = React.useState(false);  
  return (
    <div
      className=" rounded-lg overflow-hidden h-[650px] w-[450px] transition duration-300 
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={image}
        alt="No Image"
        onError={(e)=>(e.currentTarget.src="../assets/picture/diego-ph-fIq0tET6llw-unsplash.jpg")}
        className={`object-cover shadow-lg h-[650px] w-full transition duration-300 ${
          hovered ? "blur-md" : ""
        }`}
      />

      {/* Text overlay (only when hovered) */}
      {hovered && (
        <div className="absolute inset-0 flex flex-col text-white bg-black/40 px-4
        justify-end py-6 transition duration-300
        h-[650px] w-[450px]
        ">
          <h3 className="text-2xl font-bold">{Title}</h3>

          <p className="text-lg mt-2">{Content}</p>
         <a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 mt-4 inline-block rounded-xl
             backdrop-blur-md bg-white/10 border border-white/20
             text-white font-medium shadow-lg hover:bg-white/20
             hover:scale-105 transition-all duration-300"
>
  View on GitHub
</a>

        </div>
      )}
    </div>
  );
}

export default ProjectCards;
