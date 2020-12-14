import React from "react";
import "../../Styles/style.css";

function Footer() {
  return (
    //sticky footer
    <footer className="footer fixed-bottom">  
        <span className="text-muted">Copyright&nbsp;&nbsp;&nbsp;Jay DeLeonardis&nbsp;&nbsp;&nbsp;2020</span>
        <br></br>        
        <span className="text-muted">Favicon made by</span> <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> <span className="text-muted">from</span> <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

    </footer>  
  );
}

export default Footer;