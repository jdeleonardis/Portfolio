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
        <ProjectContext.Provider value={projectContext}>
            <ProjectCard />
        </ProjectContext.Provider>
    </div>  
  );
}

export default Projects;