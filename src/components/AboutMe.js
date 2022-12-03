import React from 'react'
import nathanAtMeru from "../assets/nathan-at-meru.jpg";

function AboutMe() {
  return (
    <div>
      <h1>About me</h1>
      <img src={nathanAtMeru} height="200" alt="Nathan at Meru"></img>
      <p>Hello! My name is Nathan Alexander and I am a full stack software engineer. I graduated from the University of Washington's coding bootcamp and am eager to dive into the field of web development!</p>
      
      <p>Prior to shifting my career towards tech, I worked in the non-profit sector. Most recently, I worked for the Humane Society of the United States, helping to better our food system to improve human health, animal welfare and the wellbeing of the planet.</p>

      <p>I am still very interested in making the world a better and more sustainable place and am eager to continuing to develop my programming literacy with a company or organization that shares my values and passions</p>
    </div>
  )
}

export default AboutMe

