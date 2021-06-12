import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Billboard } from "@react-three/drei"

import { GetVideosQuery } from '../../../generated/graphql'
import * as Styled from './Home3D.styled'
import { FiPrinter } from "react-icons/fi"

type Home3DProps = { videos: any }
type titleProps = { name: string; position: any; }

const Title: React.FC<Home3DProps & titleProps> = ({ videos, ...props }) => {
  const group: any = useRef()
  useEffect(() => {
    group?.current?.lookAt(0, 0, 0);
  }, [])

  console.log(videos)
  console.log(videos[0].thumbnail)
  const texture = new THREE.TextureLoader().load(videos[0].thumbnail);

  return (
    <group {...props} ref={group}>
      <Billboard args={[16, 9]}>
        <meshBasicMaterial attach="material" map={texture} />
      </Billboard>
    </group>
  )
}

const TitleCopies: React.FC<Home3DProps> = ({ videos }) => {
  const vertices = useMemo(() => {
    const y: any = new THREE.IcosahedronGeometry(17)
    const vertices = y.attributes.array
    return vertices
  }, [])

  console.log(vertices)

  return (
    <group name="titleCopies">
      { vertices.map((vertex: any, i: number) => (
        <Title name={"titleCopy-" + i} position={vertex} videos={videos} />
      ))}
    </group>
  )
}

const Scene: React.FC<Home3DProps> = ({ videos }) => {
  return (
    <group name="sceneContainer">
      <TitleCopies videos={videos} />
    </group>
  )
}


export const Home3D: React.FC<Home3DProps> = ({ videos }) => {

  return (
    <Styled.Parent>
      <Styled.Line />
      <Styled.Logo src={"/images/thumbnail-dark.png"} />
      {/* <Canvas
        onCreated={(state) => state.gl.setClearColor("0xffffff", 0)}
        camera={{ position: [-10, 4, 40], fov: 90 }}
      >
        <Scene videos={videos} />
        <ambientLight intensity={0.4} />
        <OrbitControls />
      </Canvas> */}
    </Styled.Parent>
  )
}
