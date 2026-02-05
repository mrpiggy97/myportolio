import { faCertificate, faGraduationCap, faUniversity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Education.css"

export default function Education(props: {school : string, name: string, date: string}) : JSX.Element{
    return(
        <div className="education-details">
            <FontAwesomeIcon icon={faUniversity}/>
            <p>{props.school}</p>
            <p>{props.name}</p>
            <FontAwesomeIcon icon={faGraduationCap}/>
            <p>{props.date}</p>
            <FontAwesomeIcon icon={faCertificate}/>
        </div>
    )
}