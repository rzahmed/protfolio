import React, { useState, useEffect }from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { Link } from "react-scroll"




const Navbar = () => {
  const [text, setText] = useState("Home");
  const [active, setActive] = useState(false);

  const sticky = {
    position: 'fixed',
    top: 0,
    transition: 'all 0.5s ease',
    animation: 'smoothScroll .5s forwards',
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    const position = window.pageYOffset;
    const size = window.innerHeight;
    const minHeight = 720;
    var check;

    if (size > minHeight ) {
      check = size+80;
    } else {
      check = minHeight+80;
    }
      
    if (position > check) {
      setActive(true);
    }
    if (position < check+1) {
      setActive(false);
    }

  }

  return (
    <div className="section">
     
        <div className = 'navbar-wrapper' style={active ? sticky :{}}>
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
            duration={500}
            >
              Home    
            </Link>

            <Link 
            onSetActive={()=>setText("About")}
						className="button"
            to="about"
            offset={81}
            spy={true}
            smooth={true}
            duration={500}
            >
              About   
            </Link>

            <Link 
            onSetActive={() => setText("Skills")} 
						className="button"
            to="skills"
            offset={-100}
            spy={true}
            smooth={true}
            duration={500}
            >
              Skills   
            </Link>

            <Link 
            onSetActive={() => setText("Works")} 
						className="button"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            >
              Work   
            </Link>

            <Link 
            onSetActive={() => setText("Contact")} 
						className="button"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            >
              Contact    
            </Link>


          </div>
        </div>
    </div>
  )
}

export default Navbar
