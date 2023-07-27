import { useLoader, useFrame } from "@react-three/fiber"
import { Mesh, TextureLoader, Vector3 } from "three"
import earthTexture from "./assets/dayearth10k.jpg"
import { useEffect, useRef } from "react"

export default function Earth() : JSX.Element{
    const earthMap = useLoader(TextureLoader, earthTexture)
    const earthRef = useRef<Mesh>(null!)
    const pos : number[] = window.innerWidth > 700 ? [-1,1,0] : [0,0,0]
    const positioning : Vector3 = new Vector3(...pos)
    useFrame(({clock}) => {
        const a = clock.getElapsedTime()/2
        earthRef.current.rotation.y = a*(-1)
    })
    return(
        <mesh scale={2} position={positioning} ref={earthRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[-10, 0, 0]} intensity={0.5} />
            <sphereGeometry attach="geometry"/>
            <meshStandardMaterial attach={"material"} map={earthMap} color={"skyblue"}/>
        </mesh>
    )
}