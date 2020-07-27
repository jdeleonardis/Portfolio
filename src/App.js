import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <HashRouter basename="/">      
        <Navbar />        
        <main className="container">          
          <Route exact path="/myportfolio/" component={Home} />        
          <Route exact path="/myportfolio/portfolio" component={Portfolio} />                    
          <Route exact path="/myportfolio/contact" component={Contact} /> 
        </main>                
        <Footer />      
    </HashRouter>
  );
}

export default App;
