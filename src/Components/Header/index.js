import React from "react";
import "../../Styles/style.css";
import { RowOrCol } from "../Grid";

function Header(props) {
  return (
    <RowOrCol value="row align-items-center border-bottom border-dark">
      <RowOrCol value="col-lg-12 mt-3">                
        <header> 
            <h3>{props.value}</h3> 
        </header>
      </RowOrCol>
    </RowOrCol> 
  );
}

export default Header;