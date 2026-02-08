import React from "react";
import Project from "../components/Project";
import { faDocker, faGitAlt, faGithub, faGolang } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PiggyStack() : JSX.Element{
    return(
        <React.Fragment>
            <p>
                <span className="declaration">const </span><span className="variable">stack : <span className="data-type">string[]</span> =</span> [<FontAwesomeIcon icon={faGolang}/>, <FontAwesomeIcon icon={faGithub}/>, <FontAwesomeIcon icon={faGitAlt}/>, <FontAwesomeIcon icon={faDocker}/>]
            </p>
        </React.Fragment>
    )
}

export default function PiggyHttp() : JSX.Element{
    return(
        <Project
        name="piggyhttp"
        description="Allows users to make http requests and websocket connections in a simple way. It does
        not need any extra configurations, to see instructions on how to install it visit the github
        link down below"
        imageURL="/devhttp1.gif"
        github="https://www.github.com/mrpiggy97/piggyhttp"
        link={null}
        Stack={PiggyStack}
        />
    )
}