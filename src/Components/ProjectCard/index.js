import React, { useContext } from "react";
import "../../Styles/style.css";
import ProjectContext from "../../Utils/ProjectContext";
import ProjectCardBody from "../ProjectCardBody";

function ProjectCard() {    

  const projects = useContext(ProjectContext);
  const projectArray = projects.Data.results;

  return (
        <div>           
          {projectArray.map(project => (
            <div className="card m-3" key={project.id}>
                <ProjectCardBody projectid={project.id} />
            </div>
          ))}
        </div>

  );
}

export default ProjectCard;