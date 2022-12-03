import React from 'react'


function NavBar(props) {
  console.log("props", props)
  
  return (
    <div>
      <ul className = "navBarUl">
        <li 
        className = {props.page==="AboutMe"? "about-me navBarLi nav-link-highlighted" : "about-me navBarLi"} 
        
        onClick = {()=> 
          {props.setPage ("AboutMe")
         }}>
            About Me</li>
        <li className = "portfolio navBarLi" onClick = {()=> props.setPage ("Portfolio")}>Portfolio</li>
        <li className = "contact-info navBarLi" onClick = {()=> props.setPage ("ContactInfo")}>Contact Info</li>
        <li className = "resume navBarLi" onClick = {()=> props.setPage ("Resume")}>Resume</li>

      </ul>
    </div>
  )
}


export default NavBar;