import { useLoader, useFrame } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import { useRef } from "react";
import moon from "./assets/moon.jpg"

export default function Moon() : JSX.Element{
    const moonMap = useLoader(TextureLoader,moon)
    const moonRef = useRef<Mesh>(null!)
    useFrame(({clock}) => {
        moonRef.current.rotation.z = clock.getElapsedTime()/5
    })
    return(
        <mesh ref={moonRef} position={[-1,2,0]} scale={0.2}>
            <sphereGeometry attach={"geometry"}/>
            <meshStandardMaterial attach={"material"} map={moonMap}/>
        </mesh>
    )
}