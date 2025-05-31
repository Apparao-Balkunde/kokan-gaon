import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App