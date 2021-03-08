import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <a style={{textDecoration:"none"}}
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
        </a>
      </div>
    </div>
  )
}

export default Card
