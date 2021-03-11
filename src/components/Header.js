import React from "react"
import Fade from "react-reveal/Fade"
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'
import Particles from 'react-particles-js';
import { Link } from "react-scroll"


const Header = () => {
  const params = {
    "particles": {
      "number": {
          "value": 100
      },
      "size": {
          "value": 1
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
  }

  return (
    
    <div className="section" id="home">
      <Particles params={params} style={{position:"absolute"}}/>
      <div className="container">
        <div className="header-wrapper">
        
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1 style={{color:"white", fontSize:"2rem"}}>Hello, I am </h1><h1> Raza Ahmed</h1>
            </div>
          </Fade>

          <Fade bottom>

          <div className="buttons">
            <Link 
            className="btn btn-5"
            to="about"
            spy={true}
            offset={81}
            smooth={true}
            duration={500}
            style={{fontSize:"25px"}}
            >
              <HiOutlineChevronDoubleDown></HiOutlineChevronDoubleDown>
            </Link>
          </div>

          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header

{/*
<a className="btn btn-2"
              href={resume} download="resume"
            >
               Resume <HiDownload></HiDownload>
            </a>
*/}