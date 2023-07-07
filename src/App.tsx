import './App.css'
import { Canvas } from '@react-three/fiber'
import Earth from './Earth'
import Sun from './Sun'
import Moon from './Moon'
import Project, {projectProps} from './Project'

function App() {
  const baseGithubURI = "https://www.github.com/mrpiggy97"
  const projects : projectProps[] = [
    {
      name: "space-simulation",
      github: `${baseGithubURI}/space-simulation`,
      link: "https://zingy-hotteok-ae1f96.netlify.app/",
      stack: ["Typescript", "React", "Three.js", "netlify"],
      description: "a 3d simulation of our solar system, the objective of this project was to learn implement 3d elements with typescript",
      gifURI: "./space-simulation.gif"
    },
    {
      name : "mypathfinder",
      github: `${baseGithubURI}/mypathfinder`,
      link: "https://boisterous-cocada-9ea93b.netlify.app/",
      stack: ["Typescript", "React", "Redux", "docker", "Node.js", "netlify"],
      description: "this projects's objective was to make a project that implements Dijkstra's algorithm with animations that show you how the graph grows to find the end node. It was deployed using netlify",
      gifURI: "./pathfinder.gif"
    },
    {
      name: "restClient",
      github: `${baseGithubURI}/restClient`,
      link: "https://hub.docker.com/repository/docker/fabianjesusrivas/rest-client/general",
      stack: ["Typescript", "React", "Redux", "Go", "Docker", "REST API", "Websockets"],
      description: "a chat app that connects with api to send messages and recieves them through websockets, you may follow instructions on github page to run project",
      gifURI: "./app-gif.gif"
    },
    {
      name: "rest",
      github: `${baseGithubURI}/rest`,
      link: "https://hub.docker.com/repository/docker/fabianjesusrivas/rest/general",
      stack: ["Go", "Postgresql", "REST API", "Websockets"],
      description: "a backend rest api with websocket capability that serves restClient project, recieves and sends messages, stores user data and authenticates it",
      gifURI: "./rest.gif"
    },
    {
      name: "cqrs",
      github: `${baseGithubURI}/cqrs`,
      link: null,
      stack: ["Golang", "Docker", "Elastic Search", "CQRS", "nats"],
      description: "cqrs is a proyect built in Go that implements cqrs and elastic search, its objective was to build services based on event driven architecture. See the github instructions to run the project",
      gifURI: "./cqrs.gif"
    },
    {
      name: "resume",
      github: `${baseGithubURI}/resume`,
      link: "https://gleaming-mooncake-1e1089.netlify.app/",
      stack: ["Typescript", "React", "netlify"],
      description: "this is my resume",
      gifURI:"./resume.gif"
    }
  ]

  return (
    <div id="app">
      <div id="header">
        <Canvas className='objects'>
          <ambientLight intensity={1}/>
          <directionalLight position={[6,2,3]} intensity={2}/>
          <Earth/>
          <Moon/>
        </Canvas>
        <div className='cyberpunk' >
          <span className='cyberpunk'>FABIAN J RIVAS</span>
          <span className='cyberpunk'>FABIAN J RIVAS</span>
          <span className='cyberpunk'>FABIAN J RIVAS</span>
        </div>
        <Canvas className='objects'>
          <ambientLight intensity={1}/>
          <directionalLight position={[6,2,3]} intensity={2}/>
          <Sun/>
        </Canvas>
      </div>
      <div id="projects">
        <span>hello</span>
      </div>
    </div>
  )
}

export default App
