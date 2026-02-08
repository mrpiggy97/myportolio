import { useLocation } from "react-router";
import { Log } from "../repository/Log";
import ReadLogs from "../repository/ReadLogs";
import "./ProjectLog.css"

function Commit(props : Log) : JSX.Element{
    return(
        <div className="commit">
            <p>{props.commitHash}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default function ProjectLog() : JSX.Element{
    const location = useLocation()
    const filename = location.pathname.length > 1 ? `${location.pathname.substring(1)}.json` : "home.json"
    const logs = ReadLogs(filename)
    return(
        <div className="project-logs">
            <div id="graph">
                <span>Graph</span>
            </div>
            {logs.map((val,i) => <Commit message={val.message} author={val.author} date={val.date} commitHash={val.commitHash} key={val.commitHash} />)}
        </div>
    )
}