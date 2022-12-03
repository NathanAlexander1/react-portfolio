import React from "react";
import banner from "../assets/potential-banner-image.png"
import NavBar from "./NavBar";

function header(props) {
  return (
    <div>
    <h1>Nathan's Portfolio</h1>
    <img className="placeholderImg" src={banner} alt="mountains"/>
    <NavBar setPage ={props.setPage}/> 
    </div>
  )
}

export default header