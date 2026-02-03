import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faDocker, faGithub, faGitlab, faGolang, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faArrowDown, faArrowRight, faCode, faDatabase, faHandshake, faHSquare, faList,faSearch} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function ShowProjects() : JSX.Element{
  const [showProjects, setShowProjects] = useState(true)
  const [selected, setProjectSelected] = useState("")
  const toggleShowProjects = () => {
    setShowProjects(!showProjects)
  }
  const setSelected = (projectName : string) => {
    if(projectName === selected){
      setProjectSelected("")
    }else{
      setProjectSelected(projectName)
    }
  }
  return (
    <div className='projects-directories'>
      <p>
        <FontAwesomeIcon icon={faHandshake}/> Home
      </p>
      <p onClick={toggleShowProjects} className='show-projects'>
        {showProjects ?  <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowRight}/>}
        <FontAwesomeIcon icon={faList}/> Projects
      </p>
      {
        showProjects
        ? <blockquote>
            <p className={selected === "devhttp" ? "project selected" : "project"} onClick={() => setSelected("devhttp")}>
              <FontAwesomeIcon icon={faCode}/> devhttp
            </p>
            <p className={selected === "space-simulation" ? "project selected" : "project"} onClick={() => setSelected("space-simulation")}>
              <FontAwesomeIcon icon={faCode}/> space-simulation
            </p>
            <p className={selected === "piggyhttp" ? "project selected" : "project"} onClick={() => setSelected("piggyhttp")}>
              <FontAwesomeIcon icon={faCode}/> piggyhttp
            </p>
            <p className={selected === "pathfinder" ? "project selected" : "project"} onClick={() => setSelected("pathfinder")}>
              <FontAwesomeIcon icon={faCode}/> pathfinder
            </p>
          </blockquote>
        : null
      }
    </div>
  )
}

function App() : JSX.Element {
  const [srcExpanded, setSrcExpanded] = useState(false)
  const toggleSrc = () => {
    setSrcExpanded(!srcExpanded)
  }
  return(
    <div id='app'>

      <header id='app-header'>
          Fabian Jesus Rivas Software Engineer
      </header>

      <div id='app-menu'>
        <div id='my-links'>
            <p>FJR</p>
            <a href='https://www.linkedin.com/in/fabian-jesus-rivas' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className='large-icon'/>
            </a>
            <a href='https://www.github.com/mrpiggy97' target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='large-icon'/>
            </a>
            <a href='https://www.gitlab.com/frivas6' target='_blank'>
              <FontAwesomeIcon icon={faGitlab} className='large-icon'/>
            </a>
            <a href='https://app.joinhandshake.com/profiles/fabian-jesus-rivas' target='_blank'>
              <FontAwesomeIcon icon={faHSquare} className='large-icon'/>
            </a>
            <a href='https://www.leetcode.com/mrpiggy97' target='_blank'>
              <FontAwesomeIcon icon={faCode} className='large-icon'/>
            </a>
        </div>
        <div id='project-navigation'>
          <div className='explorer'>
            <p>EXPLORER <FontAwesomeIcon icon={faSearch}/></p>
          </div>
          <div className='navigation-header'>
            <p>MY PROJECTS AND PRESENTATION</p>
          </div>
          <div className='projects'>
            <div className='projects-source' onClick={toggleSrc}>
                  {srcExpanded ? <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowRight}/>}
                  <FontAwesomeIcon icon={faList}/>
                  <span>src</span>
            </div>
            {srcExpanded ? <ShowProjects/> : null}
          </div>
        </div>
      </div>

      <div id='views'>
        views go here
      </div>

      <footer id='app-footer'>
        <FontAwesomeIcon icon={faGolang}/>
        <FontAwesomeIcon icon={faPython}/>
        <FontAwesomeIcon icon={faJs}/>
        <small>Ts</small>
        <FontAwesomeIcon icon={faReact}/>
        <FontAwesomeIcon icon={faAngular}/>
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faGitlab} />
        <FontAwesomeIcon icon={faDocker}/>
        <FontAwesomeIcon icon={faDatabase}/>
      </footer>
    </div>
  )
}

export default App
