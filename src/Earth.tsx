import { useLoader, useFrame } from "@react-three/fiber"
import { Mesh, TextureLoader } from "three"
import earthTexture from "./assets/dayearth10k.jpg"
import { useRef } from "react"

export default function Earth() : JSX.Element{
    const earthMap = useLoader(TextureLoader, earthTexture)
    const earthRef = useRef<Mesh>(null!)
    useFrame(({clock}) => {
        const a = clock.getElapsedTime()/2
        earthRef.current.rotation.y = a*(-1)
    })
    return(
        <mesh scale={1.7} position={[-4.2,1,0]} ref={earthRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[-10, 0, 0]} intensity={0.5} />
            <sphereGeometry attach="geometry"/>
            <meshStandardMaterial attach={"material"} map={earthMap} color={"skyblue"}/>
        </mesh>
    )
}