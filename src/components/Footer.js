import React from "react"
import Fade from "react-reveal/Fade"
import githubIcon from "../images/github.svg"


const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>Shoot me an email, or give me a call.</h2>
          </Fade>
          <a className="email-link" href={`mailto:rzahmed@ucdavis.edu`}>
            rzahmed@ucdavis.edu
          </a>

          <span>(916) 640-3562</span>
          <div className="social-icons">
            
              <a
                href={"https://github.com/rzahmed"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="icons"></img>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
