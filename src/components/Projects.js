import React from 'react';
import PROJECTS from '../data/projects';


const Project = props =>{
    const {title, image, description, link, hostedLink } = props.project;
    return (
        <div style={{ display :'inline-block', width : 500 , margin : 20}}>
            <h2> {title}</h2>
            <img src={image} alt='profile' style={{'width': '200px', 'height' : '100px','margin':'20px'}}/>
            <p>{description} </p>
            <a href={hostedLink}>Live Demo</a>
            <br></br>
            <a href={link}>Github Repo</a>
        </div>
    )
}
const Projects = () => {
    return (
        <div>
            <h2>Highlighted Projects</h2>
            {PROJECTS.map( PROJECT => {
                return <Project key={PROJECT.id} project={PROJECT}/>
            })}
        </div>
    )
};

export default Projects;