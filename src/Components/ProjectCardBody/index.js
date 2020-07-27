import React, { useContext } from "react";
import "../../Styles/style.css";
import "../../Styles/ProjectCardBody.css";
import { RowOrCol } from "../Grid";
import ProjectContext from "../../Utils/ProjectContext";

function ProjectCardBody(props) {    

  //filter the context array so we are getting the correct row for the key passed in.  Should only ever
  //be one array object at this point.
  const projects = useContext(ProjectContext);
  let projectArray = projects.Data.results;
  projectArray = projectArray.filter(function(e) {
    return e.id === props.projectid;
  });

  return (
    <RowOrCol value="row no-gutters align-items-center">
        <RowOrCol value="col-md-7">
            <div className="card-body">
                <h3 className="card-title">{projectArray[0].appName}</h3>
                <p className="card-text">{projectArray[0].description}</p>
                <h4 className="card-title">Technologies used:</h4>
                <p className="card-text technologies">{projectArray[0].techUsed}</p>
                <a href={projectArray[0].repoAddress} target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                <a href={projectArray[0].deployedAddress} target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
            </div>
        </RowOrCol>
        <RowOrCol value="col-md-5">
            <a href={projectArray[0].deployedAddress} target="_blank" rel="noopener noreferrer"><img src={require(`../../Images/${projectArray[0].imgLocation}`)} className="card-img border shadow" alt={projectArray[0].title}></img></a>
        </RowOrCol>   
    </RowOrCol>
  );
}

export default ProjectCardBody;