import { Link } from "react-router"
import "./Home.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCertificate, faSchool, faUniversity } from "@fortawesome/free-solid-svg-icons"
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
                <img src="./space-simulation.gif" width={"80%"} height={"50%"} alt="" />
                <img src="./pathfinder1.gif" width={"80%"} height={"50%"} alt=""/>
                <img src="/devhttp1.gif" width={"80%"} height={"50%"} alt=""/>
                <img src="/piggyhttp1.gif" width={"80%"} height={"50%"} alt=""/>
            </div>
            <div id="information">
                <section className="greeting">
                    <h2>
                        I am a software Engineer that loves to build cool-looking products.
                    </h2>                    
                </section>
                <section className="education">
                    <Education school="Western Governors University" name="Bachelor of Science in Software Engineering" date="November 2026"/>
                    <Education school="Amazon Web Services" name="AWS Certified Cloud Practitioner" date="February 2025"/>
                </section>
            </div>
        </div>
    )
}