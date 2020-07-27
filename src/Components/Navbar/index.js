import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Styles/style.css";

//function FriendCard(props) {
function Navbar() {
  const location = useLocation();    

  //console.log(location.pathname)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-dark fixed-top">    
        <a className="navbar-brand" id="navbar_name" href="/myportfolio">James L DeLeonardis</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-5">
                    <Link 
                        to="/myportfolio" 
                        className={location.pathname === "/myportfolio" || location.pathname === "/myportfolio/" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item mr-5">
                    <Link 
                        to="/portfolio" 
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
                    </Link>                
                </li>
                <li className="nav-item mr-5">
                    <Link 
                        to="/contact" 
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>  
                </li>                
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;