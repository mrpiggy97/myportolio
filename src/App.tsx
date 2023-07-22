import './App.css'
import { Canvas } from '@react-three/fiber'
import Earth from './Earth'
import Sun from './Sun'
import Moon from './Moon'
import Project, {projectProps} from './Project'

function App() {
  const baseGithubURI = "https://www.github.com/mrpiggy97"
  const frontend : projectProps[] = [
    {
      name: "space-simulation",
      github: `${baseGithubURI}/space-simulation`,
      link: "https://zingy-hotteok-ae1f96.netlify.app/",
      stack: "Typescript, React, Three.js, Netlify",
      description: "A 3d simulation of our solar system, the objective of this project was to learn how to implement 3d elements with typescript and React. The deployment and CI pipeline is thanks to Netlify",
      gifURI: "./space-simulation.gif",
      frontend: true
    },
    {
      name : "mypathfinder",
      github: `${baseGithubURI}/mypathfinder`,
      link: "https://boisterous-cocada-9ea93b.netlify.app/",
      stack: "Typescript, React, Redux, docker, Node.js, Netlify",
      description: "This projects's objective was to make a project that implements Dijkstra's algorithm with animations that show you how the graph grows to find the end node. The deployment and CI pipeline is thanks to Netlify",
      gifURI: "./pathfinder1.gif",
      frontend: true
    },
    {
      name: "restClient",
      github: `${baseGithubURI}/restClient`,
      link: "https://hub.docker.com/repository/docker/fabianjesusrivas/rest-client/general",
      stack: "Typescript, React, Redux, Go, Docker, REST, API, Websockets",
      description: "A chat app that connects with api to send messages and recieves them through websockets, you may follow instructions on github page to run project",
      gifURI: "./app-gif.gif",
      frontend: true
    },
    {
      name: "resume",
      github: `${baseGithubURI}/resume`,
      link: "https://gleaming-mooncake-1e1089.netlify.app/",
      stack: "Typescript, React, Netlify",
      description: "This is my resume, i converted it into a pdf and use it to apply for jobs, the deployment and CI pipeline is thanks to Netlify",
      gifURI:"./resume.gif",
      frontend: true
    }
  ]
  const backend : projectProps[] = [
    {
      name: "rest",
      github: `${baseGithubURI}/rest`,
      link: "https://hub.docker.com/repository/docker/fabianjesusrivas/rest/general",
      stack: "Go, Postgresql, REST API, Websockets",
      description: "A backend rest api with websocket capability that serves restClient project, recieves and sends messages, stores user data and authenticates it",
      gifURI: "./rest.gif",
      frontend: false
    },
    {
      name: "cqrs",
      github: `${baseGithubURI}/cqrs`,
      link: null,
      stack: "Go, Docker, Elastic Search, CQRS, Nats",
      description: "CQRS is a proyect built in Go that implements cqrs and elastic search, its objective was to build services based on event driven architecture. See the github instructions to run the project",
      gifURI: "./cqrs.gif",
      frontend: false
    },
  ]

  return (
    <div id="app">
      <div id="header">
        <div id="planets">
          <Canvas className='objects'>
            <ambientLight intensity={1}/>
            <directionalLight position={[6,2,3]} intensity={2}/>
            <Earth/>
            <Moon/>
          </Canvas>
        </div>
        <div id='cyber-header'>
          <div id="cyberpunk-container">
            <div className='cyberpunk'>
              FABIAN J RIVAS
            </div>
            <div className='cyberpunk2'>
              FABIAN J RIVAS
            </div>
            <div className='cyberpunk3'>
              FABIAN J RIVAS
            </div>
          </div>
          <div id="cyberpunk-container">
            <div className='cyberpunk fullstack1'>
              FULLSTACK DEV
            </div>
            <div className='cyberpunk2 fullstack2'>
              FULLSTACK DEV
            </div>
            <div className='cyberpunk3 fullstack3'>
              FULLSTACK DEV
            </div>
          </div>
        </div>
        <div id="social-links">
          <div className='github'>
            <div className='container'>
              <div className='neon-sign github-sign'>
                GITHUB
              </div>
              <div className='neon-sign2 github-sign2'>
                GITHUB
              </div>
            </div>
          </div>
          <div className='linkedin'>
            <div className='container'>
              <div className='neon-sign linkedin-sign'>
                LINKEDIN
              </div>
              <div className='neon-sign2 linkedin-sign2'>
                LINKEDIN
              </div>
            </div>
          </div>
          <div className='leetcode'>
            <div className='container'>
              <div className='neon-sign leetcode-sign'>
                LEETCODE
              </div>
              <div className='neon-sign2 leetcode-sign2'>
                LEETCODE
              </div>
            </div>
          </div>
          <div className='number'>
            <div className='container'>
                <div className='neon-sign number-sign'>
                  7866603157
                </div>
                <div className='neon-sign2 number-sign2'>
                  7866603157
                </div>
            </div>
          </div>
          <div className='email'>
            <div className='container'>
              <div className='neon-sign email-sign'>
                fabyjesusrivas10@gmail.com
              </div>
              <div className='neon-sign2 email-sign2'>
                fabyjesusrivas10@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects">
        <div id="frontend-header">
            <div className='cyberpunk frontend-header1'>
              FRONTEND PROJECTS
            </div>
            <div className='cyberpunk2 frontend-header2'>
              FRONTEND PROJECTS
            </div>
            <div className='cyberpunk3 frontend-header3'>
              FRONTEND PROJECTS
            </div>
        </div>
        <div id="backend-header">
            <div className='cyberpunk backend-header1'>
              BACKEND PROJECTS
            </div>
            <div className='cyberpunk2 backend-header2'>
              BACKEND PROJECTS
            </div>
            <div className='cyberpunk3 backend-header3'>
              BACKEND PROJECTS
            </div>
        </div>
        <div id="frontend">
          {frontend.map((pr) => <Project
          name={pr.name}
          link={pr.link}
          github={pr.github}
          stack={pr.stack}
          description={pr.description}
          gifURI={pr.gifURI}
          frontend={pr.frontend}
          />)}
        </div>
        <div id="backend">
        {backend.map((pr) => <Project
          name={pr.name}
          link={pr.link}
          github={pr.github}
          stack={pr.stack}
          description={pr.description}
          gifURI={pr.gifURI}
          frontend={pr.frontend}
          />)}
        </div>
      </div>
    </div>
  )
}

export default App
