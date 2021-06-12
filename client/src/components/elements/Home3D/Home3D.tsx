import React, { useEffect, useMemo, useRef } from "react"

import * as THREE from "three"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Billboard } from "@react-three/drei"




export const Home3D: React.FC = () => {

    return (
        <div class="parent">
            <div class="styleLine"></div>
            <img class="logo" src={"/thumbnailfordarkmode.png"}></img>
            <Canvas
                onCreated={(state) => state.gl.setClearColor("0xffffff", "0")}
                concurrent
                shadowMap
                camera={{ position: [-10, 4, 40], fov: 90 }}
            >
                {/* <color attach="background" args={["transparent"]} /> */}
                <Scene />
                <ambientLight intensity={0.4} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
