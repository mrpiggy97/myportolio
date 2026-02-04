import "./Home.css"
import { useEffect, useState } from "react"

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
        </div>
    )
}