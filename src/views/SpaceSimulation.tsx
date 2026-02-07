import { useEffect, useState } from "react"
import "./SpaceSimulation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDocker, faGit, faGitAlt, faGithub, faReact } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export default function SpaceSimulation() : JSX.Element{
    const [displayText, setDisplayText] = useState("spacesimulation")

    useEffect(() => {
        const japaneseChars = "アイウエオカキクケコサシスセソタチ"
        const text = "space-simulation"
        
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
    const lineNumbers = Array.from({ length: 25 }, (_, i) => i + 1)

    return(
        <div id="space-simulation">
            <div id="lines">
                {lineNumbers.map(num => (
                    <div key={num} className="line-number">{num}</div>
                ))}
            </div>
            <div id="space-simulation-name">
                <h1>{displayText}</h1>
            </div>
            <div id="space-simulation-preview">
                <img src="/space-simulation.gif" alt="" width={"90%"} height={"90%"}/>
            </div>
            <div id="space-simulation-description">
                <p>
                    <span className="declaration">const </span><span className="variable">description : <span className="data-type">string</span> = </span> `This is a simulation of our solar system, it allows the user to appreciate
                    how long each planets takes to make one full orbit around our sun. It also
                    let's the user appreciate the rotational speed of each planet.`
                </p>
            </div>
            <div id="space-simulation-stack">
                <p><span className="declaration">const </span><span className="variable">stack : <span className="data-type">string[]</span> =</span> [<FontAwesomeIcon icon={faReact}/>, Ts, Three.js, <FontAwesomeIcon icon={faGithub}/>, <FontAwesomeIcon icon={faGitAlt}/>, Netlify, <FontAwesomeIcon icon={faDocker}/>]</p>
            </div>
            <div id="space-simulation-links">
                <p><span className="declaration">const </span><span className="variable">repo : <span className="data-type">string</span> = </span><a href="https://github.com/mrpiggy97/space-simulation" target="_blank">Github Repo <FontAwesomeIcon icon={faGithub}/></a></p>
                <p><span className="declaration">const </span><span className="variable"> link : <span className="data-type">string</span> = </span><a href="https://simulationsolar.netlify.app/" target="_blank">link to project <FontAwesomeIcon icon={faLink}/></a></p>
            </div>
        </div>
    )
}