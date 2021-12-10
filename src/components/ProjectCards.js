import React from 'react'

function ProjectCards({project}) {
    return (
        <div className="project">
        <img
          src={project.url}
          style={{width: "360px", height: "208, 69px"}}
        />
        <h3>{project.name}</h3>
        <p>
        Explore how budgetary constraints affect <br /> creativity–for better or worse–in our Webby <br /> Award-winning original series
        </p>
        <a href="#"> Explore & learn more</a><br />
      </div>
    )
}

export default ProjectCards
