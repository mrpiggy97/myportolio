import "./Project.css"

export type projectProps = {
    name : string,
    gifURI : string | null,
    description : string,
    stack : string,
    link : string | null,
    github : string,
    frontend : boolean
}

export default function Project(props : projectProps) : JSX.Element{
    const subClass : string = props.frontend === true ? "frontend" : ""
    const finalClass = `project3 ${subClass}`
    return(
        <div className="project-container">
            <div className="project1">
            </div>
            <div className="project2">
            </div>
            <div className={finalClass}>
                <div className="name">
                    <span>{props.name}</span>
                </div>
                <div className="links">
                    <a className="link" target="_blank" href={props.github}>click here to see github repo</a>
                    {props.link ? <a className="link" target="_blank" href={props.link}>click here to see site</a> : null}
                </div>
                <div className="description">
                    <span>{props.description}.</span>
                </div>
                <div className="preview">
                    {props.gifURI ? <img src={props.gifURI} height={"90%"} width={"60%"} /> : null}
                </div>
                <div className="stack">
                    <span>Stack: {props.stack}</span>
                </div>
            </div>
        </div>
    )
}