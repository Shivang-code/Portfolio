import React from 'react'
import { motion } from "framer-motion";

function ExperienceCard({
company,
role,
duration,
description,
skills,
type,
isLast=false

}) {
  return (
<div className="relative flex gap-6 pb-8">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10" />
      {!isLast && <div className="w-0.5 flex-1 bg-white mt-0" />}

      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">{role}</h3>
              <p className="text-lg font-semibold text-primary">{company}</p>
              <p className="text-xs font-semibold text-primary">{type}</p>

            </div>
            <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {duration}
            </span>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
           {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
             <span className="px-2 py-1 rounded bg-gray-700 text-white text-xs"
                  key={index} 
                  variant="secondary"
                  
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
