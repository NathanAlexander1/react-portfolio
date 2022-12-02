import React from "react";
import banner from "../../assets/potential-banner-image.png"
import NavBar from "../NavBar";

function header(props) {
  return (
    <div>
    <h1>Nathan's Portfolio</h1>
    <div><img src={banner} alt="mountains"/>
    <NavBar setPage ={props.setPage}/> 
    </div>
    
    </div>
  )
}

export default header