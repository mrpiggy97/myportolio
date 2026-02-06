import "./Home.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faDocker, faGithub, faGitlab, faGolang, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

import Education from "../components/Education"

export default function Home() : JSX.Element{
    const [displayText, setDisplayText] = useState("Hello, I am Fabian")

    useEffect(() => {
        const japaneseChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01"
        const text = "Welcome to my portfolio"
        
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

    return(
        <div id="home">
            <div id="greeting-box">
                <h1>{displayText}</h1>
            </div>
            <div id="projects-preview">
                <img className="preview" src="./space-simulation.gif" width={"80%"} height={"50%"} alt="" />
                <img className="preview" src="./pathfinder1.gif" width={"80%"} height={"50%"} alt=""/>
                <img className="preview" src="/devhttp1.gif" width={"80%"} height={"50%"} alt=""/>
                <img className="preview" src="/piggyhttp1.gif" width={"80%"} height={"50%"} alt=""/>
            </div>
            <div id="information">
                <section className="greeting">
                    <h2>
                        I am a software Engineer that loves to build cool-looking products.
                    </h2>
                </section>
                <section className="stack">
                    <FontAwesomeIcon icon={faGolang}/>
                    <FontAwesomeIcon icon={faPython}/>
                    <FontAwesomeIcon icon={faJs}/>
                    <small>Ts</small>
                    <FontAwesomeIcon icon={faReact}/>
                    <FontAwesomeIcon icon={faAngular}/>
                    <FontAwesomeIcon icon={faGithub}/>
                    <FontAwesomeIcon icon={faGitlab} />
                    <FontAwesomeIcon icon={faDocker}/>
                    <FontAwesomeIcon icon={faDatabase}/>
                </section>
                <section className="education">
                    <Education school="Western Governors University" name="Bachelor of Science in Software Engineering" date="November 2026"/>
                    <Education school="Amazon Web Services" name="AWS Certified Cloud Practitioner" date="February 2025"/>
                </section>
            </div>
        </div>
    )
}