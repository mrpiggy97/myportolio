import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDocker, faGitAlt, faGithub, faReact } from "@fortawesome/free-brands-svg-icons"
import Project from "../components/Project"

function SpaceStack() : JSX.Element{
    return(
        <React.Fragment>
                <p>
                    <span className="declaration">const </span><span className="variable">stack : <span className="data-type">string[]</span> =</span> [<FontAwesomeIcon icon={faReact}/>, Ts, Three.js, <FontAwesomeIcon icon={faGithub}/>, <FontAwesomeIcon icon={faGitAlt}/>, Netlify, <FontAwesomeIcon icon={faDocker}/>]
                </p>
        </React.Fragment>
    )
}

export default function SpaceSimulation() : JSX.Element{

    return(
        <Project
        description="`This is a simulation of our solar system, it allows the user to appreciate
                    how long each planets takes to make one full orbit around our sun. It also
                    let's the user appreciate the rotational speed of each planet.`"
        name="space-simulation"
        imageURL="/space-simulation.gif"
        github="https://www.github.com/mrpiggy97/space-simulation"
        link="https://simulationsolar.netlify.app/"
        Stack={SpaceStack}
        />
    )
}