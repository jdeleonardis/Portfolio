import React from "react";
import "../../Styles/style.css";
import Header from "../../Components/Header";
import Projects from "../../Components/Projects";

function Portfolio() {
  return (
    <div>
        <Header value="Portfolio" />
        <Projects />
    </div>
  );
}

export default Portfolio;