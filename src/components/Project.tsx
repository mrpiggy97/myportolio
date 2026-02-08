import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import "./Project.css"

type props = {
    name : string,
    imageURL : string,
    description : string,
    github : string,
    link : string,
    Stack : () => JSX.Element
}

export default function Project(props: props) : JSX.Element{
    const [displayText, setDisplayText] = useState(props.name)

    useEffect(() => {
        const japaneseChars = "アイウエオカキクケコサシスセソタチ"
        const text = props.name
        
        const startAnimation = () => {
            let iteration = 0
            const interval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (char === " ") return " "
                            if (index < iteration) return char
                            return japaneseChars[Math.floor(Math.random() * japaneseChars.length)]
                        })
                        .join("")
                )
                if (iteration >= text.length) {
                    clearInterval(interval)
                    setTimeout(startAnimation, 5000)
                }
                iteration += 1 / 3
            }, 30)
        }
        
        startAnimation()
    }, [])


    // Generate line numbers based on content sections
    const lineNumbers = Array.from({ length: 26 }, (_, i) => i + 1)

    return(
        <div className="project">
            <div className="lines">
                {lineNumbers.map(num => (
                    <div key={num} className="line-number">{num}</div>
                ))}
            </div>
            <div className="project-name">
                <h1>{displayText}</h1>
            </div>
            <div className="project-preview">
                <img src={props.imageURL} alt="" width={"90%"} height={"90%"}/>
            </div>
            <div className="project-description">
                <p>
                    <span className="declaration">const </span><span className="variable">description : <span className="data-type">string</span> = </span> `{props.description}`
                </p>
            </div>
            <div className="project-stack">
                <props.Stack/>
            </div>
            <div className="project-links">
                <p><span className="declaration">const </span><span className="variable">repo : <span className="data-type">string</span> = </span><a href={props.github} target="_blank">Github Repo <FontAwesomeIcon icon={faGithub}/></a></p>
                <p><span className="declaration">const </span><span className="variable"> link : <span className="data-type">string</span> = </span><a href={props.link} target="_blank">link to project <FontAwesomeIcon icon={faLink}/></a></p>
            </div>
        </div>
    )
}