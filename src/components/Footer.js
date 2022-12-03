import React from "react";
import gitHubImage from "../assets/ghImage.png"
import linkedInImage from "../assets/linkedIn.png"


function footer() {
  return (
    <div className="footerLinks">
        <a target="_blank" rel="noreferrer" href="https://www.github.com/NathanAlexander1"><img src={gitHubImage} height="40" alt="GitHub Link"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nathan-alexander-a8460713a"><img src={linkedInImage} height="40" alt="LinkedIn Link"/></a>
    </div>
  )
}

export default footer