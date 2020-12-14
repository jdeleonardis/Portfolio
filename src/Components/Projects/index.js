import React, { useState } from "react";
import "../../Styles/style.css";
import ProjectCard from "../ProjectCard";
import Data from "../../Utils/projectdata.json";
import ProjectContext from "../../Utils/ProjectContext";

function Projects() {

  const [projectContext] = useState({    //no updates ever happen, so no callback function provided
    Data
  });

  return (
    <div>     
      <h1 className='mt-4'>        
        Professional/Volunteer Projects
      </h1>      
      <ProjectContext.Provider value={projectContext}>
        <ProjectCard 
          type="professional"
        />
      </ProjectContext.Provider>
      <h1 className='mt-5'>
        Full Stack Development Program Projects
      </h1>
      <ProjectContext.Provider value={projectContext}>
        <ProjectCard 
          type="school"
        />
      </ProjectContext.Provider>
    </div>  
  );
}

export default Projects;