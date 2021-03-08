import React from "react"
import Fade from "react-reveal/Fade"
import githubIcon from "../images/github.svg"
import profilepic from "../images/profilepic2.png"


const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={profilepic} alt="about"></img>
            {/*
            <div>
              <a
                href="https://github.com/rzahmed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="icons"></img>
              </a>
          </div>
          */}
          
          </div>
          
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              I'm a UC Davis computer science graduate with an interest in 
              software and full stack development. 
              <br></br>
              <br></br>
              When I'm not working projects, I enjoy video games,
              going to the gym, and watching Twitch.tv livestreams.
              
              <br></br>
              <br></br>
              I'm currently searching for a software development position so 
              if my portfolio piques your interest and you're hiring, give me a shout.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
