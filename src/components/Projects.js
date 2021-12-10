import React from 'react'
import ProjectCards from './ProjectCards';




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
             prj.map((project,i) => <ProjectCards project= {project} key={i}/>)
             }
             </section>
        </div>
    )
}

export default Projects
