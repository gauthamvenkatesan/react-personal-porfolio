import React from 'react';
import PROJECTS from '../data/projects';


const Project = props =>{
    const {title, image, description, link } = props.project;
    return (
        <div style={{ display :'inline-block', width : 300 , margin : 10}}>
            <h2> {title}</h2>
            <img src={image} alt='profile' style={{'width': '200px', 'height' : '100px'}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
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