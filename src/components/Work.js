import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import secret from "../images/secret.PNG"
import tinder from "../images/tinder.PNG"
import website from "../images/website.PNG"

const Work = () => {

  const projects = [
    {
      id: 1, 
      title: "SeCreT", 
      para:
        "A unique approach to password managers",
      imageSrc: secret,
       
      
      url: "https://github.com/secret-passwordmanager",
    },
    {
      id: 2, 
      title: "Restaurant Tinder", 
      para:
        "A fun game to play with friends to figure out where to eat",
      imageSrc: tinder,
      
      url: "https://findfood.martin-petrov.com/",
    },
    {
      id: 3, 
      title: "Website", 
      para:
        "You're looking at it",
      imageSrc: website,
      
      url: "http://localhost:8000/",
    },
  ]

  return (
    <div className="section" id="work">
      <div className="container" style={{height:"50%"}}>
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
