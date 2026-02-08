import React from "react";
import Project from "../components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faGitAlt, faGithub, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

function FindetStack() : JSX.Element{
    return(
        <React.Fragment>
            <p>
                <span className="declaration">const </span><span className="variable">stack : <span className="data-type">string[]</span> =</span> [<FontAwesomeIcon icon={faReact}/>, <FontAwesomeIcon icon={faJs}/>, <FontAwesomeIcon icon={faGithub}/>, <FontAwesomeIcon icon={faGitAlt}/>, Netlify, <FontAwesomeIcon icon={faDocker}/>]
            </p>
        </React.Fragment>
    )
}

export default function PathFinder() : JSX.Element{
    return(
        <Project
        name="dijkstrafinder"
        imageURL="/pathfinder1.gif"
        description="dijkstrafinder is an algorithm visualizer that allows users to appreciate how
        Dijkstra's algorithm grows as it tries to find an end node. The user is also able to include
        obstacles for the algorithm to overcome"
        github="https://www.github.com/mrpiggy97/mypathfinder"
        link="https://dijkstrafinder.netlify.app/"
        Stack={FindetStack}
        />
    )
}