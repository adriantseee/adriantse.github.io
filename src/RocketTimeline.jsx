import {OrbitControls} from "@react-three/drei"
import {Rocket} from "./Rocket"
import {useFrame} from "@react-three/fiber"
import React from 'react'

export const RocketTimeline = () => {
    const rocket = React.useRef()

    function Rotate() {
        useFrame(({ clock }) => {
            rocket.current.rotation.y += 0.01; // Adjust the rotation speed as needed
        })
    }
    Rotate();

    return (
        <>
            <ambientLight intensity={1} />
            <mesh ref={rocket}>
                <Rocket />
            </mesh>
            <OrbitControls />
        </>
    )
}