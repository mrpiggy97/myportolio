import { useLoader, useFrame } from "@react-three/fiber";
import { Mesh, TextureLoader, Vector3 } from "three";
import { useRef } from "react";
import moon from "./assets/moon.jpg"

export default function Moon() : JSX.Element{
    const moonMap = useLoader(TextureLoader,moon)
    const moonRef = useRef<Mesh>(null!)
    const pos : number[] = window.innerWidth > 700 ? [2,2,0] : [2,2,0]
    const positioning : Vector3 = new Vector3(...pos)
    useFrame(({clock}) => {
        moonRef.current.rotation.z = clock.getElapsedTime()/5
    })
    return(
        <mesh ref={moonRef} position={positioning} scale={0.5}>
            <sphereGeometry attach={"geometry"}/>
            <meshStandardMaterial attach={"material"} map={moonMap}/>
        </mesh>
    )
}