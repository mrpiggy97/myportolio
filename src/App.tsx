import './App.css'
import { Canvas } from '@react-three/fiber'
import Earth from './Earth'
import Sun from './Sun'
import Moon from './Moon'

function App() {

  return (
    <div id="app">
      <Canvas id="upper-canvas">
        <ambientLight intensity={1}/>
        <directionalLight position={[6,2,3]} intensity={2}/>
        <Earth/>
        <Sun/>
        <Moon/>
      </Canvas>
    </div>
  )
}

export default App
