import {OrbitControls} from "@react-three/drei"

export const RocketTimeline = () => {
    return(
        <>
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
        </>
    )
}