import React, { useState }from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { Link } from "react-scroll"



const Navbar = () => {
  const [text, setText] = useState("Home");

  return (
    <div className="section">
      <div>
        <div className="navbar-wrapper">
          <div className="current">
          <SwitchTransition mode="out-in">
          <CSSTransition
            classNames="fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            key={text}
          >
            <div>{text}</div>
          </CSSTransition>
          </SwitchTransition>
          </div>
            
          
          <div className="links-wrapper">
           
            <Link 
            onSetActive={() => setText("Home")} 
						className="button"
            to="home"
            spy={true}
            smooth={true}
            duration={700}
            >
              Home    
            </Link>

            <Link 
            onSetActive={() => setText("About")} 
						className="button"
            to="about"
            
            spy={true}
            smooth={true}
            duration={700}
            >
              About   
            </Link>

            <Link 
            onSetActive={() => setText("Skills")} 
						className="button"
            to="skills"
            
            spy={true}
            smooth={true}
            duration={700}
            >
              Skills   
            </Link>

            <Link 
            onSetActive={() => setText("Works")} 
						className="button"
            to="work"
            spy={true}
            smooth={true}
            duration={700}
            >
              Work   
            </Link>

            <Link 
            onSetActive={() => setText("Contact")} 
						className="button"
            to="contact"
            spy={true}
            smooth={true}
            duration={700}
            >
              Contact    
            </Link>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
