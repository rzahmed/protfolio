import React from "react"
import Fade from "react-reveal/Fade"
import resume from "../images/resume.pdf"
import {HiDownload} from 'react-icons/hi'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                Raza Ahmed
              </h1>
              <h1>
                {" "}
                
              </h1>
              <h1>
                {" "}
               
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <a className="btn btn-2"
              href={resume} download="resume"
            >
              <HiDownload></HiDownload> Resume
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
