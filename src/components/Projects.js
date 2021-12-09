import React from 'react'




function Projects() {
    const prj=[
    {name:"Projet 1", url:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},
    {name:"Projet 2", url:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},
    {name:"Projet 3", url:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},
    {name:"Projet 4", url:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},
    {name:"Projet 5", url:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},
    {name:"Projet 6", url:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"}
]

    
    
    return (
        <div>

             <section className="projects-section">

       {
       
       prj.map(el => 

        <div className="project">
        <img
          src={el.url}
          style={{width: "360px", height: "208, 69px"}}
        />
        <h3>{el.name}</h3>
        <p>
        Explore how budgetary constraints affect <br /> creativity–for better or worse–in our Webby <br /> Award-winning original series
        </p>
        <a href="#"> Explore & learn more</a><br />
      </div>
        
        )}
        </section>


        </div>
    )
}

export default Projects
