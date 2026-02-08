import React from "react";
import Project from "../components/Project";
import { faReact, faGithub, faGitAlt, faDocker } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DevStack() : JSX.Element{
    return(
        <React.Fragment>
            <p>
                <span className="declaration">const </span><span className="variable">stack : <span className="data-type">string[]</span> =</span> [<FontAwesomeIcon icon={faReact}/>, Ts, <FontAwesomeIcon icon={faGithub}/>, <FontAwesomeIcon icon={faGitAlt}/>, Netlify, <FontAwesomeIcon icon={faDocker}/>]
            </p>
        </React.Fragment>
    )
}

export default function DevHttp() : JSX.Element{
    return(
        <Project
        name="devhttp"
        description="devhttp is a terminal that allows users run commands from their browser. To
        see which commands are available run ls. Each command
        has sub-commands, to see the available sub-commands run <command> help. To see what each
        sub-command does run: <command> <subcommand> help"
        imageURL="/devhttp1.gif"
        github="https://www.github.com/mrpiggy97/devhttp"
        link="https://devhttp.netlify.app/"
        Stack={DevStack}
        />
    )
}