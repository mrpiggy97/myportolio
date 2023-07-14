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
            </div>
            <div className="project2">
            </div>
            <div className="project3">
                <div className="name">
                    <span>{props.name}</span>
                </div>
                <div className="github">
                    <span>repo: {props.github}</span>
                </div>
                <div className="link">
                    {props.link ? <span>link: {props.link}</span> : null}
                </div>
                <div className="stack">
                    <span>tech stack: {props.stack}</span>
                </div>
                <div className="description">
                    <span>{props.description}</span>
                </div>
                <div className="preview">
                    <span>preview</span>
                    {props.gifURI ? <img src={props.gifURI} height={"100%"} width={"50%"} /> : null}
                </div>
            </div>
        </div>
    )
}