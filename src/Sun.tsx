import { useLoader, useFrame } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import { useRef } from "react";
import sunTexture from "./assets/sun.jpg"

export default function Sun() : JSX.Element{
    const sunMap = useLoader(TextureLoader,sunTexture)
    const sunRef = useRef<Mesh>(null!)
    useFrame(({clock}) => {
        sunRef.current.rotation.z = clock.getElapsedTime()
    })
    return(
        <mesh scale={0.3} ref={sunRef} position={[6,2,0]}>
            <sphereGeometry attach={"geometry"}/>
            <meshStandardMaterial attach={"material"} color={"yellow"} map={sunMap}/>
        </mesh>
    )
}