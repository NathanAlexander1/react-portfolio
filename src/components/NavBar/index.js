import React from 'react'
import "./style.css"

function NavBar(props) {
  return (
    <div>
      <ul>
        <li className = "about-me" onClick = {()=> props.setPage ("AboutMe")}>About Me</li>
        <li className = "portfolio" onClick = {()=> props.setPage ("Portfolio")}>Portfolio</li>
        <li className = "contact-info" onClick = {()=> props.setPage ("ContactInfo")}>Contact Info</li>
        <li className = "resume" onClick = {()=> props.setPage ("Resume")}>Resume</li>

      </ul>
    </div>
  )
}

export default NavBar;