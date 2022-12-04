import React from 'react'
import NathanResume from "../assets/Nathan-Resume.pdf"

function Resume() {
  return (
    <div>
      <h1>Download my resume below</h1>
      <p>RESUME PLACEHOLDER</p>

      <a href={NathanResume} download>Download my resume</a>
      <p>Proficiencies</p>
    </div>
  )
}

export default Resume
