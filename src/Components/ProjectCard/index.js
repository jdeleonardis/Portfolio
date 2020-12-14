import React, { useContext } from "react";
import "../../Styles/style.css";
import ProjectContext from "../../Utils/ProjectContext";
import ProjectCardBody from "../ProjectCardBody";

function ProjectCard(props) {    

  const projects = useContext(ProjectContext);
  const projectArray = projects.Data.results.filter(project =>    
    project.type === props.type    
  );

  return (
    <div className="mb-5">           
      {projectArray.map(project => (
        <div className="card mb-3" key={project.id}>
          <ProjectCardBody projectid={project.id} />
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;