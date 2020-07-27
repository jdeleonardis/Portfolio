import React from "react";

const ProjectContext = React.createContext({
    id: 0,
    appName: "",
    description: "",
    techUsed: "",
    imgLocation: "",
    repoAddress: "",
    deployedAddress: ""
});

export default ProjectContext;