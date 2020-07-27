import React from "react";
import "../../Styles/style.css";
import Header from "../../Components/Header";
import AboutMe from "../../Components/AboutMe";

function Home() {
  return (
    <div>
        <Header value="About Me" />
        <AboutMe />
    </div>
  );
}

export default Home;