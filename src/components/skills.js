import React from "react"
import htmlIcon from "../images/html.svg"
import cssIcon from "../images/css.svg"
import reactIcon from "../images/react.svg"
import jsIcon from "../images/javascript.svg"
import javaIcon from "../images/java.svg"
import cIcon from "../images/C.svg"



const Skills = () => {

  const skills = [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Javascript",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "REACT",
    },
    {
      id: 5,
      img: javaIcon,
      para:
        "Java",
    },
    {
      id: 6,
      img: cIcon,
      para:
        "C",
    },
  ]


  return (
    <div className="section" id="skills">
      <div className="container" style={{height:"fit-content"}}>

    

      
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Skills
