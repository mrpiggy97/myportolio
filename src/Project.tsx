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
        <div className="project">
            <span>{props.name}</span>
            <span>{props.description}</span>
            <span>{props.stack}</span>
            {props.link ? <span>{props.link}</span> : null}
            {props.gifURI ? <span>{props.gifURI}</span> : null}
        </div>
    )
}