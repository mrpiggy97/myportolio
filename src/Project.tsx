import "./Project.css"

export type projectProps = {
    name : string,
    gifURI : string | null,
    description : string,
    stack : string[],
    link : string | null,
    github : string,
}

export default function Project(props : projectProps) : JSX.Element{
    return(
        <div className="project-container">
            <div className="project1">
                <span>{props.name}</span>
                <span>{props.github}</span>
                {props.link ? <span>{props.link}</span> : null}
                <span>{props.stack}</span>
                <span>{props.description}</span>
                {props.gifURI ? <span>{props.gifURI}</span> : null}
            </div>
            <div className="project2">
                <span>{props.name}</span>
                <span>{props.github}</span>
                {props.link ? <span>{props.link}</span> : null}
                <span>{props.stack}</span>
                <span>{props.description}</span>
                {props.gifURI ? <span>{props.gifURI}</span> : null}
            </div>
        </div>
    )
}