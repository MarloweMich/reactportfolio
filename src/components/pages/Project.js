import React from 'react';
import "./Project.css"



function Project(props) {
    return (
        <div className='cardContainer'>
            {props.projects.map(item => (
                <div className='card hover-shadow' key={item.id}>
                    {/* <h6>{item.title}</h6> */}
                    <img className="card-img-top" src={item.img}
                         alt={item.title}
                         width="250px"
                    />
                    <a className='textDeployed' href={item.deployedLink}>Deployed Here</a>
                    <a className='textGithub' href={item.githubLink}>GitHub Repo</a>
                    <p className='textTechs'>{item.techs}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default Project;

